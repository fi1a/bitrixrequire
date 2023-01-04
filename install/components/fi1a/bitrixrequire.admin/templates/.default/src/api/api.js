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
}