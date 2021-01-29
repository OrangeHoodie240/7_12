describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it("Should create single row element on updateServerTable()", function(){

    // set up code from submitServerInfo()
    let serverName = serverNameInput.value;

    if (serverName !== '') {
      serverId++;
      allServers['server' + serverId] = { serverName };
  
      updateServerTable();
  
      serverNameInput.value = '';
    }

    expect(serverTbody.children.length).toEqual(1); 
    expect(serverTbody.children[0].tagName).toEqual('TR'); 

  });

  afterEach(function() {
    // teardown logic
    allServers = {}; 
    serverTbody.innerHTML = '';
  });
});
