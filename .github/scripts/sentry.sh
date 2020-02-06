# This replaces the .sentryclirc <token> string with our $TOKEN variable from GitHub secrets
sed -i -e 's/<token>/'"$TOKEN"'/g' ./.sentryclirc