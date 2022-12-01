/**
 * Execution Context
 *
 * JS 실행시 코드 실행 및 변경을 위한 특별한 환경이 생성된다.
 * 이를 Execution Context 라 부른다.
 *
 * global execution context 가 존재하며
 * 함수 실행시 마다 생성되는 function execution context 가 있다.
 *
 * Execution Context Phase
 * 1. Creation Phase
 *      1. create the global object(window, global)
 *      2. create the 'this' object and bind to the global object
 *      3. setup memory heap for storing variables and function references
 *      4.
 *
 * 2. Execution Phase
 *      1. Execute code line by line
 *      2. create a new execution context for each function call
 *
 * TDZ(Temporal Dead Zone)
 * --------------------
 * |Creation Phase    | var(declaration, initialize) let,const(declaration)
 * --------------------
 * |Temporal Dead Zone|
 * --------------------
 * |Execution Phase   | var(assign) let,const(initialize, assign)
 * --------------------
 * 
 *
 *
 * */