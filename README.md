# Work_Day_Scheduler
Work Day Sheduler

A work day scheduler was created following the below acceptance criteria set out in the homework. 

Below this I have broken down how the javascript works to achieve the acceptance criteria. All of the homework solution has been completed using javascript.

## Reference - Generate Password Requirements 

For reference, the following requirements were set out in the homework.

## Acceptance Criteria
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

# Solution Guide

# [Scheduler Link](https://rehamilton.github.io/Work_Day_Scheduler/ "Scheduler")

## Overall Process

Below is a flowdiagram of the overall process.

![markdownAssets/Overall_Process.png]( "Overall Process")

# Main Page

## Format Page

A welcome screen describing the quiz and the consequences of a wrong answer. Contains a start quiz button that, once clicked, moves you to the questions screen.

![markdownAssets/Format.png]( "Format")

## Save Button - Storage

Once the screen is formatted and the user enters an event the save button saves it to local storage. By using the hour reference as the Key the local storage is overwritten each time the save buttn is pressed on 1 row ensuring that the most up to date information is avaialble.

![markdownAssets/SaveBtn.png]( "Save")
