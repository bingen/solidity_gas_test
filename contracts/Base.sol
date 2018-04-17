pragma solidity 0.4.18;


contract Base {
    event Log(uint256 i);

    function doNothing() public {
        Log(1);
    }
}
