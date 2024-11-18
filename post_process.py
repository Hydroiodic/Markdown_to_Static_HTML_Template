import re
import sys


# remove the first '/' in each pattern '/static/.*?(\.js|\.css)'
def process_file(filename: str):
    with open(filename, "r") as file:
        processed_content: str = file.read()
        processed_content: str = re.sub(
            r"/(static/.*?(\.js|\.css))", r"\1", processed_content
        )
        processed_content: str = re.sub(
            r"/(index\.html|manifest\.json)", r"\1", processed_content
        )
    with open(filename, "w") as file:
        file.write(processed_content)


if __name__ == "__main__":
    # get filename from args
    assert len(sys.argv) == 2
    process_file(sys.argv[1])
