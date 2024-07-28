import os

def chunk_list(lst, chunk_size):
    """Chunk a list into smaller lists of a specified size."""
    for i in range(0, len(lst), chunk_size):
        yield lst[i:i + chunk_size]

def list_files_in_directory(directory):
    """List all files in a given directory."""
    try:
        return [f for f in os.listdir(directory) if os.path.isfile(os.path.join(directory, f))]
    except FileNotFoundError:
        print(f"Directory {directory} not found.")
        return []
    except PermissionError:
        print(f"Permission denied to access {directory}.")
        return []

def main(directory, chunk_size=100):
    """Main function to list files and chunk the list."""
    files = list_files_in_directory(directory)
    chunked_files = list(chunk_list(files, chunk_size))
    return chunked_files

if __name__ == "__main__":
    directory_path = input("Enter the directory path: ")
    chunked_files = main(directory_path)
    for idx, chunk in enumerate(chunked_files):
        print(f"Chunk {idx + 1}:")
        for file in chunk:
            print(f"  {file}")


