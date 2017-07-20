# Generic Email Signup Plugin
Generic Corp collects email address on their Wordpress powered blogs using this plugin. The previous developer was moved to a different project and Generic Corp has hired you to fix bugs, ensure the plugin is working correctly, and add a few new features.

## Usage:
This plugin, when installed on a Wordpress site will allow users to place the shortcode `[generic-email]` on any page or post which will be converted into an email submission form to collect email addresses. On form submission, the email address and secondary opt-in for the corporate mailing list will be sent server-side and saved in the local database for processing at a later date.

## Your task:
You've been asked to complete several tasks.

1. Fork this repository.
2. Install a test Wordpress environment on your local environment using whatever tool you're most comfortable with. Here are a few options:
  - [MAMP](https://www.mamp.info/en/)
  - [Vagrant](https://github.com/Varying-Vagrant-Vagrants/VVV)
3. Install the plugin
4. Place the shortcode on a test post or page and begin debugging.
5. Prioritize bugs, then tackle as many of the tasks as possible within a two hour time limit. You will **not** be penalized for running out of time!
6. Once complete, please email us back with a link to your repository. You can use any Git host you'd like (Github, Gitlab, Bitbucket). If you'd like to keep your repository private, please give us read access.

## Completion Checklist:
Please fix as many of the following issues as you can within a two hour window

- [X] Please update the text of the secondary opt-in from 'Sign up for stuff here!' to 'Get latest updates from Generic Corp.'
- [X] Client requests you change the color of the submit button to red, because it may increase conversion rates. They have no preference on the shade of red.
- [] **BUG** Client reports email addresses are not being saved to the database, please find and fix the issue.
- [] Client is complaining that users are submitting blank email addresses, please add some basic validation prior to form submission.
- [] Client does not like the alert confirmation/error messages after form submission.  They would like you to hide the form and show a success message that reads "Thanks for signing up for our email newsletter!" or an error message that reads "We're sorry, seems like something went wrong.  Please try again later."
- [] **BONUS (HARD)** Client wants to add a tertiary opt-in to the email sign up. This will require adding an additional column to the database table, checkbox and modifying the ajax request to submit the tertiary checkbox value. Client requests opt-in checkbox language to read: "Sign me up for great deals from GenericDealz.com"
- [] **BONUS (HARDER)** Client wants a way to export the email list.  Please add a menu option to the settings or tools admin panel section which displays a page with a button or link that will export `wp_generic_emails` table to a .csv file.
