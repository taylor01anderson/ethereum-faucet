// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// A contract that withdraws and accepts ether
contract Faucet {
    // 'give ether to anyone who asks
    function withdraw(uint withdraw_amount) public {

        // limit withdrawal amount to 0.1 ether
        require(withdraw_amount <= 100000000000000000, "You can withdraw a maximum of 0.1 ether");

        // send the requested amount to the caller
        payable(msg.sender).transfer(withdraw_amount);
    }

    // fallback function to accept incoming ether
    receive() external payable {}
}