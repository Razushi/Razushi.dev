https://www.youtube.com/watch?v=Jq0h69J-rZw

​I just cant describe amount of problems you'll get when using such approach, it's completely wrong. Just never use interrupts like this, that's not what they meant for. Never call user code bigger that assigning value to a register/shared memory from ISR. Never enable interrupts from ISR unless you want another high-priority interrupt to be called. And never use nested interrupts like this - its a way to stack overflow, only use it when it's necessary to handle event in time.​

Pro tip: dont run your task inside an ISR,

If you want look for "context switch" and not running code inside the ISR. You can also check interrupt code for storing and retrieving the context for each arch in free RTOS for examples

https://www.youtube.com/watch?v=d0gS5TXarXc

![](99%20-%20Assets/2025/2025-03-09-04-03-17.png)