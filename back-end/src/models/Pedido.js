const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({


    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    carrinho: {

        itens: {
            type:Array
        },

        total: {
            type:Number,
            default:0
        }
    },
    historico: [
        {   
            carrinho: {
                itens: {
                    type:Array
                },
            
                total: {
                    type:Number,
                    default:0
                },
                createdAt: {
                    type: Date,
                    default: Date.now(),
                }
            }
        }
    ]

});


const Pedido = mongoose.model("Pedido", PedidoSchema);

module.exports = Pedido