export default {
    /**
     * Добавить пакет
     */
    require(require) {
        return BX.ajax.runComponentAction(
            'fi1a:bitrixrequire.admin',
            'require',
            {
                mode: 'class',
                data: require,
            }
        );
    },

    /**
     * Удалить пакет
     */
    remove(name) {
        return BX.ajax.runComponentAction(
            'fi1a:bitrixrequire.admin',
            'remove',
            {
                mode: 'class',
                data: {
                    package: name
                },
            }
        );
    },

    /**
     * Список установленных пакетов
     */
    show() {
        return BX.ajax.runComponentAction(
            'fi1a:bitrixrequire.admin',
            'show',
            {
                mode: 'class'
            }
        );
    },

    /**
     * Список предложенных пакетов
     */
    suggest() {
        return BX.ajax.runComponentAction(
            'fi1a:bitrixrequire.admin',
            'suggest',
            {
                mode: 'class'
            }
        );
    },

    /**
     * Обновить зависимости
     */
    update() {
        return BX.ajax.runComponentAction(
            'fi1a:bitrixrequire.admin',
            'update',
            {
                mode: 'class'
            }
        );
    },

    /**
     * Установить из файла
     */
    install() {
        return BX.ajax.runComponentAction(
            'fi1a:bitrixrequire.admin',
            'install',
            {
                mode: 'class'
            }
        );
    },
}