import React , {Component} from 'react';
import PeersBlock from "./peerconn";
class ShowChain extends Component{


  render(){
    let [index,previousHash,timestamp,data,hash,nonce] = this.props.block;


    return(<div>Created Chain:
        [{index},{previousHash},{timestamp},{data},{hash},{nonce}]
        <PeersBlock block={this.props.block}/>
      </div>
    )

  }
}

export default ShowChain;
