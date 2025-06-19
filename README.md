# Community Savings Group Manager

## Overview
The Community Savings Group Manager is a modular command-line application designed to help users manage their savings groups. It allows users to register, log in, schedule meetings, make contributions, request loans, and access financial education materials. The application is structured into multiple files for better organization and maintainability.

## File Structure
```
community_savings_group_manager/
│
├── main.py               # Entry point of the application
├── user.py               # User-related functionalities (registration, login, profile management)
├── meeting.py            # Meeting scheduling and notifications management
├── group.py              # Group creation and management
├── financial.py          # Financial contributions and loans management
├── education.py          # Financial education materials
└── manager.py            # Main manager class that integrates all components
```

## Installation
To run the Community Savings Group Manager, ensure you have Python installed on your machine. You can download Python from [python.org](https://www.python.org/downloads/).

1. Clone the repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Run the application using the following command:
   ```bash
   python main.py
   ```

## Usage
1. **Register**: Choose the option to register and follow the prompts to create a new account.
2. **Login**: After registration, log in using your credentials.
3. **User  Menu**: Once logged in, you will see a menu with various options:
   - Make a Contribution
   - Request a Loan
   - View Contributions
   - View Loans
   - Schedule a Meeting
   - View Upcoming Meetings
   - View Notifications
   - Set Notification Preferences
   - Create a Group
   - View Your Groups
   - Manage Profile
   - View Financial Education
   - Logout

4. **Exit**: You can exit the application at any time by selecting the exit option from the main menu.

## Code Structure
### 1. `main.py`
The entry point of the application that initializes and runs the `CommunitySavingsGroupManager`.

### 2. `user.py`
Contains the `User Manager` class, which handles user registration, login, password management, and profile updates.

### 3. `meeting.py`
Contains the `MeetingManager` class, which manages scheduling meetings and viewing notifications.

### 4. `group.py`
Contains the `GroupManager` class, which handles the creation and management of user groups.

### 5. `financial.py`
Contains the `FinancialManager` class, which manages user contributions and loan requests.

### 6. `education.py`
Contains the `EducationManager` class, which provides access to financial education materials.

### 7. `manager.py`
The main manager class that integrates all components, coordinating interactions between user management, meetings, groups, finances, and educaction.

### Scheduling a Meeting
```python
def schedule_meeting(self, current_user):
    date_str = input("Enter the meeting date (YYYY-MM-DD): ")
    time_str = input("Enter the meeting time (HH:MM): ")
    agenda = input("Enter the meeting agenda: ")
    
    meeting_datetime = datetime.datetime.strptime(f"{date_str} {time_str}", "%Y-%m-%d %H:%M")
    if current_user not in self.meetings:
        self.meetings[current_user] = []
        self.notifications[current_user] = []
    
    self.meetings[current_user].append({
        'datetime': meeting_datetime,
        'agenda': agenda
    })
    self.notifications[current_user].append(f"Meeting scheduled for {meeting_datetime.strftime('%Y-%m-%d %H:%M')} - {agenda}")
    print("Meeting scheduled successfully!")

## Acknowledgments
- This application is built using Python and leverages its built-in libraries for date and time management.
- Special thanks to the open-source community for their contributions and resources that made this project possible.

