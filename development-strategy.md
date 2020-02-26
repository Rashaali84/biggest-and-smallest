# biggest & smallest: development strategy

Building this site one step at a time

## 0. Setup

(already complete)

## 1. Data & Log

(already complete)

## 2. Init

> - init.js will be changed
> - copy of the initial state into log , while loading/also render the state of numbers array to the html page .

## 3. User Story: A user can save/add number list

> - As a user I want to add a list numbers to be added to the list so a biggest number and a smallest number can be chosen from it to be displayed.
> - The code files to be changed [data->numbers.js, listeners->save-number.js ,handlers->save-numbers.js]

## 4. User Story: A user can view the biggest and smallest numbers each time he enters a new one(number) .

> - As a user I need to view immediately the smallest number and the largest number while adding the numbers so that user can see results on the spot.
> - The code files to be changed [handlers->save-numbers.js]

## 4. User Story: A user can reset the whole list back to zero elements

> - As a user I need to be able to reset the elements list to zero elements , and this for too the smallest and the biggest numbers outputs , so I can start again with new data set as a source .
> - The code files to be changed [listeners->reset.js,handlers->reset.js]
