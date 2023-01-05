export default {
    /**
     * Добавить пакет
     */
    require(require) {
        return BX.ajax.runComponentAction(
            'fi1a:bitrixrequire.admin',
            'require',
            {
                mode:'class',
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
                mode:'class',
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
                mode:'class'
            }
        );
    },
}