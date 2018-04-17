pragma solidity 0.4.18;

import "./Base.sol";
import "./Inherit.sol";
import "./Wrapper.sol";


contract Caller {
    function createBase() {
        Base base = new Base();
        base.doNothing();
    }
    function createInherit() {
        Inherit inherit = new Inherit();
        inherit.doNothingElse();
    }
    function createWrapper() {
        Wrapper wrapper = new Wrapper();
        wrapper.doNothing();
    }
}
