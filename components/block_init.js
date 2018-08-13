import React, {Component} from 'react';
import SHA256 from "crypto-js/sha256";
//import { Link } from "../routes.js";
import {List, Menu,Button,Visibility} from "semantic-ui-react";
import Layout from "./Layout"


class Block extends Component {

  state={
    createGenesis:false,
    //index:0,
    //previousHash:0,
    //timestamp:0,
    //data:500,
    //hash:0,
  }


  createBlock = () =>{
    if(!this.state.createGenesis){//creating my genesis block
    var index = 0;//this.state.index;//index
    var previousHash = 0;//this.state.previousHash;//previousHash;
    var timestamp = new Date().toLocaleString();//Date.now();//new Date().toLocaleString();////this.props.timestamp,
    var data = 5000;//this.state.data;
    var nonce = 0;
    //this.setState({index:index,previousHash:previousHash,timestamp:timestamp,data:data,createGenesis:true});
    var hash = this.calculateHash(index,previousHash,timestamp,data,nonce);

    //console.log(hash);
    //this.setState({hash:hash});
    //this.setState({createGenesis:true});//no da!!!!!!!!!1
    var block =[index,previousHash,timestamp,data,hash,nonce];
    this.props.onCreateBlock(block);
    this.setState({index:index,previousHash:previousHash,timestamp:timestamp,data:data,hash:hash,nonce:nonce,createGenesis:true});
    //return();
  }

  }

  calculateHash = (index,previousHash,timestamp,data,nonce) => {
        return SHA256(index + previousHash +
          timestamp + JSON.stringify(this.state.data)).toString();
    }


render(){
  //this.createBlock()
  //if(this.props.createGenesis){
    //this.createBlock();
  //}

  //console.log(this.state.previousHash)
  //return null;
  return(
    <div style={{ marginTop: "10px" }}>
    <Menu>
    <Button
      content="Create Blockchain"
      icon="add circle"
      labelPosition="left"
      floated="left"
      primary
      onClick={this.createBlock}
    />

    </Menu>
    <List>
      <List.Item><List.Header>Index</List.Header>{this.state.index}</List.Item>
      <List.Item><List.Header>PreviousHash</List.Header>{this.state.previousHash}</List.Item>
      <List.Item><List.Header>TimeStamp</List.Header>{this.state.timestamp}</List.Item>
      <List.Item><List.Header>Amount of coins</List.Header>{this.state.data}</List.Item>
      <List.Item><List.Header>Block Hash</List.Header>{this.state.hash}</List.Item>
      <List.Item><List.Header>Nonce</List.Header>{this.state.nonce}</List.Item>
    </List>
    </div>
  );

  }

}

export default Block;
