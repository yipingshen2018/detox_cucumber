Feature: Element matchers

Element can be located using the various macthers supported by Detox

Background: I navigate to the Counters section

Given I tap on the Counters section by text

@matchers @text

Scenario: I can locate elements by text
When I tap on the Water Counter by text
And I tap on the Electricity Counter by text
And I tap on the Gas Counter by text
Then I tap on the Broadband Counter by text

@matchers @label

Scenario: I can locate elements by label
When I tap the Home navigation section by label
And I tap on the Counters section by text
#shouldn't use unless agreed by the team and company policy. SHould be used only for accessibility
#shoud not use for E2E tests

Then I tap on the Water Counter by label

@matchers @id

Scenario: I  can locate element by id

When I tap on the Water Counter by id

 Then I tap on the Electricity Counter by id
 
 Then I tap on the Gas Counter by id
 
 Then I tap on the Broadband Counter by id


 
    @matchers @multiple
    Scenario: I can locate elements by multiple matchers
        When I tap on the Water Counter Title by type and text
    
    @matchers @parentchild
    Scenario: I can locate elements with a matcher and parent/child
        When I tap on the Water Counter by parent id and child text
        And I multi tap on the Electricity Counter by parent id and child id
        And I multi tap on the Gas Counter by child text and parent id
        Then I tap on the Broadband Counter by child id and parent id



