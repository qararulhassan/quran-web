#!/bin/bash

# Remove carriage return characters from the list of URLs
tr -d '\r' < list.txt | while IFS= read -r url; do
    # Extract the filename from the URL
    filename=$(basename "$url")
    extension=".json"
    
    # Generate a new filename by appending a unique identifier before the extension
    count=1
    #new_filename="${filename%$extension}_${count}$extension"
    new_filename="${count}$extension"
    while [ -e "$new_filename" ]; do
        count=$((count + 1))
        #new_filename="${filename%$extension}_${count}$extension"
	new_filename="${count}$extension"
    done
    
    # Download the file using curl
    curl -O -L -J -k "$url"
    
    # Rename the downloaded file to the generated new filename
    mv "$filename" "$new_filename"
done
