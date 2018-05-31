## TODO List
- [ ] get posts page
- [ ] show notification 

## ISSUES

- [ ] Windows下 8081 端口被 node 占用的解决办法
    - Find The Pid
    `$ netstat -ano|find "8081"`
    ```bash
    TCP    0.0.0.0:8081           0.0.0.0:0              LISTENING       21156 # this is the pid
    TCP    [::]:8081              [::]:0                 LISTENING       21156
    ```
    - Find The Process
    `$ tasklist|findstr "21156"`
    ```bash
    node.exe                     21156 Console                   14     53,976 K
    ```
    - Kill them
    `$ taskkill -F /pid 21156`
