# ## Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ## ticket down into 2-5 individual tickets to perform. Provide as much detail for each ## ticket as you can, including ### acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - [ ] you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

---

## Ticket 1: Add custom_id field to Agents table

---

Description: Add a new field to the Agents table that will allow Facilities to enter their own custom_id for each Agent they work with.

### Acceptance Criteria:

- [ ] A new column called "custom_id" is added to the Agents table in the database.
- [ ] The custom_id field can be added and updated through the web application.
- [ ] The custom_id field is displayed on the reports generated for Facilities.

Estimated Time: 4 hours

### Tasks:

- [ ] Update the database schema to add the new "custom_id" column to the Agents table.
- [ ] Update the web application to display the custom_id field on the Agents edit page.
- [ ] Update the database queries to include the custom_id field in the Shifts and generateReport() functions.

---

## Ticket 2: Validate custom_ids entered by Facilities

---

Description: Add validation to ensure that Facilities are entering valid custom_ids for each Agent.

### Acceptance Criteria:

- [ ] Custom_ids must be unique per Facility.
- [ ] Custom_ids can only contain alphanumeric characters.
- [ ] Custom_ids must be at least 5 characters long.

Estimated Time: 2 hours

### Tasks:

- [ ] Add validation checks to the web application when creating/updating Agents.
- [ ] Update the database queries to ensure that custom_ids are unique per Facility.
- [ ] Display error messages on the web application when validation fails.

---

## Ticket 3: Update report generation to use custom_ids

---

Description: Update the report generation function to use the new custom_id field instead of the internal database id.

### Acceptance Criteria:

- [ ] The generateReport() function must use the custom_id field instead of the internal database id when generating reports.
- [ ] The metadata about the Agent assigned to each Shift should still be included in the report.

Estimated Time: 3 hours

### Tasks:

- [ ] Update the generateReport() function to use the custom_id field instead of the internal database id.
- [ ] Ensure that the metadata about the Agent assigned to each Shift is still included in the report.

---

## Ticket 4: Modify generateReport() to use custom_ids

---

Description: Modify the generateReport() function to include the new custom_id field on the reports generated for Facilities.

### Acceptance Criteria:

- [ ] The custom_id field should be included on the reports generated for Facilities.
- [ ] The custom_id field should be displayed alongside the metadata about the Agent assigned to each Shift.

Estimated Time: 2 hours

### Tasks:

- [ ] Modify the generateReport() function to include the custom_id field on the reports.
- [ ] Update the report template to display the custom_id field alongside the metadata about the Agent assigned to each Shift.

---

## Ticket 5: Create API endpoint to access custom_ids

---

Description: Create a new API endpoint that will allow Facilities to retrieve the custom_ids for their Agents.

### Acceptance Criteria:

- [ ] A new API endpoint is created that returns the custom_ids for a given Facility.
- [ ] The API endpoint is secured so that only Facilities with the appropriate permissions can access it.

Estimated Time: 3 hours

### Tasks:

- [ ] Create a new API endpoint to retrieve the custom_ids for a given Facility.
- [ ] Implement security measures to ensure that only authorized Facilities can access the endpoint.

---

## Execution plan

## Execution Plan

### Sprint 1

#### Week 1

##### Day 1

- Start working on Ticket 1: Add custom_id field to Agents table
  - Create new column `custom_id` in `Agents` table in database
  - Add `custom_id` field to Agent model in code
  - Create migration to update existing `Agents` table to include new `custom_id` column

##### Day 2

- Continue working on Ticket 1
  - Complete any remaining items from Day 1

##### Day 3

- Continue working on Ticket 1
  - Complete any remaining items

##### Day 4

- Start working on Ticket 2: Validate custom_ids entered by Facilities
  - Update the form for Facilities to add a custom_id field
  - Add validation to ensure that custom_id is unique and no more than 10 characters

##### Day 5

- Continue working on Ticket 2
  - Complete any remaining items

#### Week 2

##### Day 1

- Continue working on Ticket 2
  - Complete any remaining items

##### Day 2

- Start working on Ticket 3: Update report generation to use custom_ids
  - Update `getShiftsByFacility` function to return `custom_id` instead of `id` for Agent metadata
  - Update `generateReport` function to use `custom_id` instead of `id` for Agent metadata
  - Add code to handle cases where `custom_id` is not available

##### Day 3

- Continue working on Ticket 3
  - Complete any remaining items

##### Day 4

- Start working on Ticket 4: Modify generateReport() to use custom_ids
  - Update `generateReport` function to use `custom_id` instead of `id` for Agent metadata

##### Day 5

- Continue working on Ticket 4
  - Complete any remaining items

### Sprint 2

#### Week 1

##### Day 1

- Continue working on Ticket 4
  - Complete any remaining items

##### Day 2

- Start working on Ticket 5: Create API endpoint to access custom_ids
  - Create a new endpoint to return the custom_id for a given Agent

##### Day 3

- Continue working on Ticket 5
  - Complete any remaining items

##### Day 4

- Perform code review and testing on completed tickets
- Address any feedback or issues that arise

##### Day 5

- Address any remaining feedback or issues from code review and testing

#### Week 2

##### Day 1

- Perform final testing and bug fixes

##### Day 2

- Deploy the changes to production and test

##### Day 3

- Monitor the changes in production and address any issues that arise

##### Day 4

- Perform a retrospective and review the team's performance during the sprint

##### Day 5

- Plan the next sprint, prioritizing any remaining tickets and new features or improvements that arise.
