import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";
import Molochs from "../abi/Moloch.json";
import { Button, Form, Input} from "semantic-ui-react";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import { Link, Switch, Route } from "react-router-dom";
import Biconomy from "@biconomy/mexa";
let sigUtil = require("eth-sig-util");

let domainType = [
  { name: "name", type: "string" },
  { name: "version", type: "string" },
  { name: "chainId", type: "uint256" },
  { name: "verifyingContract", type: "address" },
];

let metaTransactionType = [
  { name: "nonce", type: "uint256" },
  { name: "from", type: "address" },
  { name: "functionSignature", type: "bytes" },
];

let domainData = {
  name: "Moloch",
  version: "1",
  chainId: "42",
  verifyingContract: "0xd93d5C229AE4134b8996b8CF1Ee5c309a460Ba65",
};

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadBlockchainData() {
    // let assetcount =  await this.state.Moloch.methods.getCurrentPeriod().call({from: this.state.account});
    // console.log(assetcount);
    // let assetcount1 =  await this.state.Moloch.methods.guildBank().call({from: this.state.account});
    // console.log(assetcount1);
    // let assetcount2 =  await this.state.Moloch.methods.abortWindow().call({from: this.state.account});
    // console.log(assetcount2);
    // let assetcount3 =  await this.state.Moloch.methods.dilutionBound().call({from: this.state.account});
    // console.log(assetcount3);
    // let assetcount4 =  await this.state.Moloch.methods.getProposalQueueLength().call({from: this.state.account});
    // console.log(assetcount4);
    // let assetcount5 =  await this.state.Moloch.methods.gracePeriodLength().call({from: this.state.account});
    // console.log(assetcount5);
    // let assetcount6 =  await this.state.Moloch.methods.approvedToken().call({from: this.state.account});
    // console.log(assetcount6);
    // let assetcount7 =  await this.state.Moloch.methods.periodDuration().call({from: this.state.account});
    // console.log(assetcount7);
    // let assetcount8 =  await this.state.Moloch.methods.processingReward().call({from: this.state.account});
    // console.log(assetcount8);
    // let assetcount88 =  await this.state.Moloch.methods.totalShares().call({from: this.state.account});
    // console.log(assetcount88);
    // let assetcount9 =  await this.state.Moloch.methods.totalSharesRequested().call({from: this.state.account});
    // console.log(assetcount9);
    // let assetcount99 =  await this.state.Moloch.methods.summoningTime().call({from: this.state.account});
    // console.log(assetcount99);
  }

  async loadWeb3() {
    if (1) {
      // Ethereum user detected. You can now use the provider.
      let provider = window["ethereum"];
      console.log(provider);
      await provider.enable();
      if (1) {
        domainData.chainId = 42;
        let biconomy = new Biconomy(window.ethereum, {
          apiKey: "lL86ucFG1.6da3cec1-e029-499f-92fc-08d8977e54c8",
          debug: true,
          strictMode: true,
        });

        let web3 = new Web3(biconomy);
        this.setState({ web3: web3 });
        const accounts = await web3.eth.getAccounts();
        this.setState({ account: accounts[0] });
        console.log(this.state.account);
        const networkId = await web3.eth.net.getId();
        this.setState({ networkId });

        biconomy
          .onEvent(biconomy.READY, () => {
            // Initialize your dapp here like getting user accounts etc
            //   const Moloch =  this.state.web3.eth.Contract(Token, "0x6690C139564144b27ebABA71F9126611a23A31C9");
            //   this.setState({ Moloch:Moloch });
            //   console.log(this.state.Moloch);

            let Moloch = web3.eth.Contract(
              Molochs,
              "0xd93d5C229AE4134b8996b8CF1Ee5c309a460Ba65"
            );
            this.setState({ Moloch });
            console.log(Moloch);

            //  console.log(this.state.accounts);

            console.log("Sending meta transaction");
            let userAddress = this.state.account;
            console.log(this.state.Moloch);
          })
          .onEvent(biconomy.ERROR, (error, message) => {
            // Handle error while initializing mexa
          });
      }
    }
  }

  async handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      token: {},
      ethBalance: "0",
      tokenBalance: "0",
      loading: true,
      Moloch: {},
      Name: "",
      orderstatus: "",
      Description: "",
      Quantity: "",
      functionSignature1: "",
      sign1: "",
    };

    this.handlePolicySubmit = this.handlePolicySubmit.bind(this);
    this.getSignatureParameters = this.getSignatureParameters.bind(this);
    this.sendSignedTransaction = this.sendSignedTransaction.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  async handlePolicySubmit(event) {
    event.preventDefault();

    if (1) {
      console.log("Sending meta transaction");
      let userAddress = this.state.account;
      console.log(this.state.Moloch);
      console.log(this.state.account);

      // const Moloch =  new this.state.web3.eth.Contract(Token, "0x26507AbcE1C604a8116896FA44B823E74f6c9533");
      let nonce = await this.state.Moloch.methods
        .getNonce(this.state.account)
        .call({ from: this.state.account });
      console.log(nonce);
      // let nonce = 1;
      let functionSignature = this.state.Moloch.methods
        .submitProposal(
          this.state.Name,
          this.state.orderstatus,
          this.state.Description,
          this.state.Quantity
        )
        .encodeABI();
      console.log(functionSignature);

      this.setState({
        functionSignature1: functionSignature,
      });

      let message = {};
      message.nonce = parseInt(nonce);
      message.from = userAddress;
      message.functionSignature = functionSignature;

      let dataToSign = JSON.stringify({
        types: {
          EIP712Domain: domainType,
          MetaTransaction: metaTransactionType,
        },
        domain: domainData,
        primaryType: "MetaTransaction",
        message: message,
      });
      console.log(domainData);
      console.log(dataToSign);
      console.log(userAddress);

      let msgParams = [userAddress, dataToSign];
      let sign = await window.ethereum.request({
        method: "eth_signTypedData_v4",
        params: msgParams,
      });
      console.log(sign);
      this.setState({
        sign1: sign,
      });

      let { r, s, v } = await this.getSignatureParameters(sign);

      console.log(r);
      console.log(s);
      console.log(v);

      let output = await this.sendSignedTransaction(
        userAddress,
        functionSignature,
        r,
        s,
        v
      );
      console.log(output);
    } else {
      console.log("Sending normal transaction");
    }
  }

  async getSignatureParameters(signature) {
    if (!this.state.web3.utils.isHexStrict(signature)) {
      throw new Error(
        'Given value "'.concat(signature, '" is not a valid hex string.')
      );
    }
    var r = signature.slice(0, 66);
    var s = "0x".concat(signature.slice(66, 130));
    var v = "0x".concat(signature.slice(130, 132));
    v = this.state.web3.utils.hexToNumber(v);
    if (![27, 28].includes(v)) v += 27;
    console.log(r);
    console.log(s);
    console.log(v);
    return {
      r: r,
      s: s,
      v: v,
    };
  }

  async sendSignedTransaction(userAddress, functionData, r, s, v) {
    console.log(userAddress);
    console.log(functionData);
    console.log(r);
    console.log(s);
    console.log(v);
    console.log(this.state.Moloch);
    let a = await this.state.Moloch.methods
      .executeMetaTransaction(userAddress, functionData, r, s, v)
      .estimateGas({ from: userAddress });
    console.log(a);

    let gasLimit = await this.state.Moloch.methods
      .executeMetaTransaction(userAddress, functionData, r, s, v)
      .estimateGas({ from: userAddress });
    let gasPrice = await this.state.web3.eth.getGasPrice();
    //  console.log(gasLimit);
    console.log(gasPrice);
    let tx = await this.state.Moloch.methods
      .executeMetaTransaction(userAddress, functionData, r, s, v)
      .send({
        from: userAddress,
        gasPrice: gasPrice,
        gasLimit: gasLimit,
      });
    console.log(tx.transactionHash);
    this.setState({ output: tx.transactionHash });
  }
  catch(error) {
    console.log(error);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"></nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  className="App-link"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>

                <div>
                  <div>
                    <Link to="/">Home </Link>
                    <Link to="/about">About Us </Link>
                    <Link to="/shop">Shop Now </Link>
                  </div>
                  <main>
                    <Switch>
                      <Route path="/" component={Home} exact />
                      <Route path="/about" component={About} />
                      <Route path="/shop" component={Shop} />
                      <Route component={Error} />
                    </Switch>
                  </main>

                  <div style={{ fontSize: "20px" }}>
                    <Form.Field
                      control={Input}
                      onChange={this.handleChange}
                      name="Name"
                    >
                      <label>NAME</label>
                      <input placeholder="Name" />
                    </Form.Field>
                    <Form.Field
                      control={Input}
                      onChange={this.handleChange}
                      name="orderstatus"
                    >
                      <label>ORDER STATUS</label>
                      <input placeholder="Order status" />
                    </Form.Field>
                    <Form.Field
                      control={Input}
                      onChange={this.handleChange}
                      name="Description"
                    >
                      <label>DESCRIPTION</label>
                      <input placeholder="Description" />
                    </Form.Field>
                    <Form.Field
                      control={Input}
                      onChange={this.handleChange}
                      name="Quantity"
                    >
                      <label>QUANTITY</label>
                      <input placeholder="Quantity" />
                    </Form.Field>
                    <Button
                      onClick={this.handlePolicySubmit}
                      basic
                      color="green"
                    >
                      CREATE
                    </Button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
