module.exports = function(RED) {
    function BridgeNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = "Bridge Telegram: " + this.port;
            node.send(msg);
        });
    }
    RED.nodes.registerType("bridge",BridgeNode);
}
