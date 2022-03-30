# Reviewer instructions
The reviewer has the responsibility to check the below points, and to approve or reject the QA request.   
If you have questions regarding the functionality talk to the developer,   
if you have questions about design, contact the designer.
For viewing the code in stage type www.design.stage.swedbankpay/feature/<branch-name>.
Every code review should validate the following:

## General
- Is all the code easily understood?
- Is there any redundant or duplicate code?
- Can and should some pieces be turned into separate modules?
- Can any global variables be replaced?
- Is there any commented out code?
- Can any of the code be replaced with library functions?
- Can any logging or debugging code be removed?
- Is there any typos in the documentation files?
- Does the PR have a linked Jira task in the description? 

## WCAG
- Can the html be more semantic?
- Would the html make sense for a user using a screen reader?
- Can the functionality be accessed only using a keyboard?
- Are ARIA-lables used and are they used correctly? 
- Does the text and other visual elements have a good contrast ratio and size?

## Documentation
- Comments should only be used if code is deviation from normal practices or are related to non-trivial business rules. 
- Are sequence diagrams, data model and APIs described/updated in wiki?
- Does the readme need to be updated due to these changes?

## Testing
- Is the code testable? i.e. don’t add too many or hide dependencies, unable to initialize objects, test frameworks can use methods etc.
- Does any code exist only to support test code?
- Do tests exist and are they comprehensive? i.e. has at least your agreed on code coverage.
- Do unit tests actually test that the code is performing the intended functionality?
