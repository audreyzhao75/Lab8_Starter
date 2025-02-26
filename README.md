# Lab 8 - Starter
  
  Team 18: Audrey Zhao and Brandon Park
  
---
1) We would fit our automated tests within a github action that runs whenever code is pushed to the repository, because it will keep all the code updated. Whenever we make pushes there will be established checkpoints on when tests pass or fail so we can differentiate different errors in different locations. Manually running them locally is unreliable because teammates could either forget to test for it or incorrectly test their code. Finally, running the tests after all development is complete is a terrible idea because you may encounter dozens of errors that will make debugging extremely confusing and difficult. It is easier to test often and use unit testing to make sure all the code being pushed works properly.
2) No, because end-to-end testing is used for testing the entire program or specific user action/journey rather than focusing on a single function, which would be for unit testing. 
3) No, testing the "message" feature of a messaging application would be better suited for end-to-end testing as messaging is the main essential feature and user interaction for the application. In addition, there could be many factors/units in sending a message, of which each should be unit tested on their own but not together as one unit test.
4) Yes, testing the "max message length" feature would only require inputting simple strings to test this limit, rather than a whole user interation in the application.