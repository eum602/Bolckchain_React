import React , {Component} from 'react';
import SHA256 from "crypto-js/sha256";
import Block from "../components/block_init";
import { Button, Table } from "semantic-ui-react";
import Layout from '../components/Layout';
import {Menu} from "semantic-ui-react";
import ShowChain from "../components/showChain";
import PeersBlock from "../components/peerconn";
//import { Link } from "../routes.js";


class Blockchain extends Component {
  state = {
    chain : [],//[this.createGenesisBlock()]
    createGenesis:false,

  }

  attachBlock = (block)=>{
      let blocks = this.state.chain;
      blocks.push(block);
      this.setState({chain:blocks,added:true});
      console.log(this.state.chain);
  }

/*
renderprueba =()=>{
  return(
    <div>para poner algun texto o actualizar a otro componente</div>
  );
}
*/

/*
  let savjeeCoin = new Blockchain();
  savjeeCoin.addBlock(new Block(1, "20/07/2017", { amount: 4 }));
  savjeeCoin.addBlock(new Block(2, "20/07/2017", { amount: 8 }));
*/
  render(){

      let chain=this.state.chain;
      //let lastBlock = chain[0];
      let item = chain.map(bloque => {
        return(<ShowChain key={bloque.timestamp} block={bloque} />
        );
      });
      //return(<ShowChain block={block}/>);
      //for (let block in chain) {
      //}

    return(
      <Layout style={{ marginTop: "10px" }}>
      <Block onCreateBlock={this.attachBlock.bind(this)}/>
      <h3>{item}</h3>
      </Layout>
    );
  }
}

export default Blockchain;
