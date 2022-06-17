import { Layout, Input} from 'components'
import { useState } from 'react'

export const CadastroProdutos: React.FC = () => {

    const [sku, setSku] = useState<string>('')
    const [preco, setPreco] = useState<string>('')
    const [nome, setNome] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')

    const submit = () =>{
        const produto = {
            sku, nome, descricao, preco
        }
        console.log(produto)
    }

    return (
        <Layout titulo='Cadastro de Produtos'>
            <div className="columns">
                <Input id='inputSku'
                       columnClasses='is-half'
                       onChange={setSku}
                       value={sku}
                       label="SKU: *"
                       placeholder="Digite o SKU do produto"
                       />

                <div className="field is-half column">
                    <label htmlFor="inputPreco" className="label">Preço: *</label>
                    <div className="control">
                        <input id="inputPreco" className="input"
                            placeholder="Digite o Preço do produto"
                            value={preco}
                            onChange={event => setPreco(event.target.value)}/>
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="field is-full column">
                    <label htmlFor="inputNome" className="label">Nome: *</label>
                    <div className="control">
                        <input id="inputNome" className="input"
                            placeholder="Digite o Nome do produto"
                            value={nome}
                            onChange={event => setNome(event.target.value)} />
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="field is-full column">
                    <label htmlFor="inputDesc" className="label">Descrição: *</label>
                    <div className="control">
                        <textarea id="inputDesc" className="textarea"
                            placeholder="Digite o Descrição do produto"
                            value={descricao}
                            onChange={event => setDescricao(event.target.value)} />
                    </div>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button onClick={submit} className="button is-link">Salvar</button>
                </div>
                <div className="control">
                    <button className="button">Voltar</button>
                </div>
            </div>
        </Layout>

    )
}