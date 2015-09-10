require('./style.css');

module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function () {
        return {
            hostId: '',
            serverSlug: '',
            //file
            file: {
                name: '',
                content: ''
            },
            list: {
                files: [],
                full_path: '',
                current_path: [],
                base: true
            },
            fileToDelete: ''
        }
    },
    ready: function () {
        this.hostId = this.route.params.hostId;
        this.serverSlug = this.route.params.serverSlug;

        this.$root.checkPerm('HOST_' + this.hostId + '_MC_' + this.serverSlug + '_FILES');

        this.$root.$set('title', 'Pliki')

        this.getFiles()
    },
    methods: {
        getFiles: function (openDir) {
            var path = "";
            if (this.list.base == false) {
                path = this.list.current_path.join("/")
            }
            this.$http.post('/api/host/' + this.hostId + '/mc/files/list', {
                name: this.serverSlug,
                path: path
            }, function (data) {
                if (data.error === false) {
                    this.list.full_path = data.data.full_path;
                    this.list.files = data.data.files;

                    var files = data.data.files;

                    if (files.length > 50) {
                        Materialize.toast('Zbyt dużo plików do wyświetlenia', 4000)
                    } else {
                        this.list.files = files;
                    }
                } else {
                    Materialize.toast(data.error_msg, 5000)
                }
            });
        },
        showFile: function (file) {
            this.$http.post('/api/host/' + this.hostId + '/mc/files/view', {
                name: this.serverSlug,
                file: this.list.current_path.join("/") + "/" + file
            }, function (data) {
                if (data.error === false) {
                    this.file.name = file;
                    this.file.content = data.data.content;
                    var lines = data.data.lines;

                    jQuery('#file').openModal();

                    var clientHeight = document.getElementById('file').offsetHeight - 175;
                    jQuery("#editor").css("height", clientHeight + "px")

                    var ace = require('brace');
                    require('brace/mode/properties');
                    require('brace/theme/monokai');

                    var editor = window.ace.edit("editor");
                    window.editor = editor;
                    editor.setTheme("ace/theme/monokai");
                    editor.getSession().setMode("ace/mode/properties");
                    editor.setValue(this.file.content, -1);

                } else {
                    Materialize.toast(data.error_msg, 5000)
                }
            });
        },
        openDir: function (dir) {
            this.list.base = false;
            this.list.current_path.push(dir);

            this.getFiles(true)
        },
        backDir: function () {
            this.list.current_path.pop()

            if (this.list.current_path.length == 0) {
                this.list.base = true;
            }

            this.$http.post('/api/host/' + this.hostId + '/mc/files/list', {
                name: this.serverSlug,
                path: this.list.current_path.join("/")
            }, function (data) {
                if (data.error === false) {
                    this.list.files = data.data.files;
                } else {
                    Materialize.toast(data.error_msg, 5000)
                }
            });
        },
        deleteDialog: function(name) {
            jQuery('#deleteDialog').openModal();
            this.fileToDelete = name;
        },
        deleteFile: function (name) {
            this.$http.post('/api/host/' + this.hostId + '/mc/files/delete', {
                name: this.serverSlug,
                file: this.list.current_path.join("/") + "/" + name
            }, function (data) {
                this.getFiles()
                if (data.error === false) {
                    Materialize.toast('Plik został usunięty', 5000)
                } else {
                    Materialize.toast(data.error_msg, 5000)
                }
            });
        },
        saveFile: function (name) {
            var editor = window.editor;
            var value = editor.getSession().getValue();

            value = value.replace(/(?:\r\n|\r|\n)/g, '\\n');
            console.log({
                name: this.serverSlug,
                file: this.list.current_path.join("/") + "/" + name,
                content: value
            });

            this.$http.post('/api/host/' + this.hostId + '/mc/files/write', {
                name: this.serverSlug,
                file: this.list.current_path.join("/") + "/" + name,
                content: value
            }, function (data) {
                if (data.error === false) {
                    Materialize.toast('Plik został zapisany', 5000)
                } else {
                    Materialize.toast(data.error_msg, 5000)
                }
            });
        }
    },
    filters: {
        formatDate: function (value) {
            var d = new Date(value);
            return d.format('yyyy-mm-dd HH:MM:ss')
        },
        formatSize: function(bytes) {
            var thresh = 1024;
            if(Math.abs(bytes) < thresh) {
                return bytes + ' B';
            }
            var units = ['kB','MB','GB','TB','PB','EB','ZB','YB']
            var u = -1;
            do {
                bytes /= thresh;
                ++u;
            } while(Math.abs(bytes) >= thresh && u < units.length - 1);
            return bytes.toFixed(1)+' '+units[u];
        }
    }
};