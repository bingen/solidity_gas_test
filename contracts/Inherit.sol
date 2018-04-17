pragma solidity 0.4.18;

import "./Base.sol";


contract Inherit is Base {

    function doNothingElse() public {
        doNothing();
    }
}
