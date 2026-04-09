### Task 1: Creating users with command-line tools

Using the command-line tools (useradd, etc), create a username peter with the default uid and gid. Peter’s full name is “Peter Griffin” and his preferred login shell is zsh (the Z shell). With the Fedora/Redhat/Centos version of useradd, you should find that a default home directory is created for Peter, and that the skeleton files are copied, without further options than those for the shell and the comment field. Set a password for Peter. Note that you can set a password for new users by an option of the useradd command. But in practice this is seldom or never done. Read the man pages for useradd to try to ascertain why the password option is inconvenient. Instead, use the passwd command as root to set initial passwords for all new accounts. Make appropriate notes in your learning journal.

Test that you can log in as each of these users.
Some ways to try:
1. GUI: System → Logout (or Switch User) (What has changed about the login screen?)
2. Command line: ssh brian@localhost
Check the group memberships with the “id” command

### Task 2: Configuring groups and assigning users to groups
Create a group called family, using the groupadd command. Make Stewie and Brian members of this group (it should not be their primary group though), using the usermod -G command (note: capital G). Log in as Stewie or Brian and verify their group membership by running the “id” command. Create a new file (for example, by using the touch command). Who is the group owner? Run the ps command, and note down the PID of your shell. You will use this information later. While logged in as Stewie or Brian, change their current group using the “newgrp” command, and verify the change with “id”. Now create another file and check its group ownership. What do you observe? There are many subtleties to be noted in this task. For example, what is the mechanism by which “newgrp” works? Try to ascertain this by reading the man pages. Use the ps command to see how many shells you have running now. What would be the most sensible way to reverse the effects of newgrp? In other words, how do you get back to the previous situation? In your journal, describe the difference (if any) between a user’s  default (or primary) group, and other group memberships.

### Task 3: Modifying user account settings
Modify Peter’s account so that it will expire in 5 days. You should try logging in as Peter next week.
(hint: chage -E or usermod -e – they do the same thing)

Check Peter’s password aging parameters with: chage -l peter

Modify Stewie’s account so that he is required to change his password at least every 5 days. You should also try logging in as Stewie next week to test his password aging (hint: chage -M). Check using the chage command.

Lock Brian’s account so he cannot log in. Try doing it three ways:
• Lock Brian’s account with the usermod command (hint: usermod -L)
• by “locking” Brian’s password (putting a * in it, or putting a !! in front of the password). Then unlock  it this way
Note: the correct way to directly edit the shadow file is with: vipw -s

Further note: if you really cannot use vi you can make vipw use a different editor. First run:
export EDITOR=gedit and then run vipw afterwards (or any other plain text editor works too, e.g. nano). However, having some basic capability with vi is useful for system administrators as a GUI is not always available, e.g. remote server administration)

• by changing Brian’s shell to a “/sbin/nologin” shell, and change the default message so that it says “Please contact the system administrator to have your account re-enabled”. (Hint: man nologin and use usermod to set Brian’s shell to /sbin/nologin).

### Task 4: Creating a user without using command-line tools
Finally, create a fourth user with username lois. However this time, do not use the useradd command – perform each of the steps manually. Of course in practice you would never do this – it is just so you have confidence in knowing what all the steps are and exactly what’s going on behind the scenes when you use the useradd command.

Remember to use vipw when editing the passwd file and vigr to edit the group file. Lois’s full name is “Lois Griffin”, and she should be allocated the next uid and gid in sequence, as Linux would have done. Lois prefers the bash shell. Don’t forget to set her password (using the passwd command), create a home directory (with skeleton files), and chown her home directory and skeleton files.

Test that you have created the account properly by logging in as Lois. Make the following checks:
• Does lois have a home directory in the right location?
• Who is the user owner and group owner of lois’ home directory?
• What files are present in lois’ home directory?
• How did you ensure that you copied the dot files to lois’ home directory?
• What are the ownerships of these files?

### Task 5: Using the GUI
You can use the graphical user/group administration GUI to do all of the above steps.
Check and confirm the configuration of lois using the GUI via Settings → Details → Users.
What details can’t you see or set via the GUI?

### Task 6: Using Windows Server GUI to add users and groups
We will not use Active Directory to manage our Windows Server, and for the moment will simply modify local groups.

Start with Server Manager → Local Server. From the Tools menu, choose “Computer Management” and on the left you should see “Local Users and Groups”. Expand this so you see separate menus for Users and Groups.

Right click on “Users” and choose “New User”. Add the above users (peter, stewie, brian, lois). Then do the same thing with “Groups” and add their respective group (family) and assign them as members of the group.

When adding users to a group, you have to search for the appropriate “object” to add as a member. Use the Add button to do this which produces a “Select Users” popup.

You then need to type the object name (e.g. brian) into the entry field , then press Check Names to confirm it.

ALTERNATIVELY: Click Advanced and you should get a detailed search panel. Choosing Find Now will show all the valid objects you can add, so select brian from this list.

Notice that the user name is of the format: workstation\user. In a domain environment, the workstation prefix would be replaced by the Domain name.

### Task 7: Using Windows Server command line to add users and groups
As with many things on Windows Server there are PowerShell modules and normal Windows commands that can achieve similar results.
Some PowerShell commands to try (you may to run PowerShell as Administrator):
• New-LocalUser -Name "joe" -FullName "Joe Swanson"
• Get-LocalUser
• Disable-LocalUser joe
• Enable-LocalUser joe

See also:
• New-LocalUser (and browse other command documentation from the menu)
Some Windows Command Prompt commands to try:
• net user bonnie /add /fullname:"Bonnie Swanson"
• net user
• net user bonnie
• wmic useraccount where "name='bonnie' "
See also:
• Administrative tasks from the command line
• Net user command
Make notes in your journal about these commands and options.
Remember that although you can achieve everything using the Windows GUI, the benefit of being familiar with some of the command-line tools is that they are SCRIPTABLE. As a system administrator you can create scripts that could for example create hundreds of user accounts at once from data in an Excel spreadsheet.