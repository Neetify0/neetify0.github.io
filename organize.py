import os

# Define the path to the folder containing the games
games_folder = '/Users/navaneet/Downloads/neetify0.github.io/games'  # Update this with the actual path to your games folder

# Get the list of games from the folder
games = [game for game in os.listdir(games_folder) if os.path.isdir(os.path.join(games_folder, game))]

# Sort the games alphabetically
games.sort()

# Generate the HTML content
html_content = '''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neetify</title>
    <link rel="icon" type="image/x-icon" href="../logo.ico"> <!-- Specify favicon.ico here -->
    <link rel="stylesheet" href="../styles.css"> <!-- Link to external CSS file -->
    <link href='https://fonts.googleapis.com/css?family=Lexend:500' rel='stylesheet'>
</head>
<body>
    <div class="navbar">
        <!-- Navbar content -->
        <div class="logo">
            <img src="../logo.ico">
        </div>
        <ul class="nav-links">
            <li><a href="/">HOME</a></li>
            <li><a href="../apps">APPS</a></li>
            <li><a href=".">GAMES</a></li>
        </ul>
    </div>

    <div class="button-grid">
        <!-- Button grid content -->
'''

# Add game buttons to the HTML content
for game in games:
    game_name = game.replace('-', ' ').title()  # Convert folder name to a more readable format
    html_content += f'        <a href="{game}/" class="button">{game_name}</a>\n'

# Close the HTML content
html_content += '''    </div>
</body>
</html>
'''

# Define the path to the output HTML file
output_html_file = '/Users/navaneet/Downloads/neetify0.github.io/games/your_new_file.html'  # Update this with the desired output path

# Write the HTML content to the file
with open(output_html_file, 'w') as file:
    file.write(html_content)

print(f'HTML file has been generated at: {output_html_file}')
