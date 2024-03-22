# Intro

## storing data

1.  memory

- memory will be cleared on every boot/program start

2.  disk

- for persistence

## Disk storage

- plain text files
- structured text file
  - jason
  - csv/tsv(Comma Separated Value/Tab Separated value)
  - xml
  - ini
  - svg (for images, xml file)
- binary file
- data in binary format
- images
- audio
- video

## Plain text

```
Mary River
2024

Report



This year 2024 will be the begining of new project. Designer of the new project Mary River and Matt Jones attended the launch....
```

problem with plain text: Hard or impossible to handle programmatically

## structured text

```
Year:2024

Type: Report

This year 2024 will be the begining of new project. Designer of the new project Mary River and Matt Jones attended the launch of type:marketing.

```

## better solutions

```json
{
  "writer": {
    "firstname": "Mary",
    "lastname": "River"
  },
  "year": 2024,
  "type": "Report",
  "text": [
    "This year 2024 will be the begining of a ",
    "new project. Designer of the new project",
    "Mary River and Matt Jones attended the",
    "launch of type:marketing."
  ]
}
```

### XML documentation

```xml

<document>
    <writer>
        <firstname>Mary</firstname>
        <lastname>River</lastname>
    </writer>
    <year>2024</year>
    <type>Report</type>
    <text>
        This year 2024 will be the begining of new project. Designer of the new project Mary River and Matt Jones attended the launch of type:marketing.
    </text>

</document>
```

## Using text file as Data Storage

### Json

### Json

```Json
[
        {
            "firstname": "Mary",
            "lastname": "River",
            "age":25

        },

        {
            "firstname": "Matt",
            "lastname": "ajones",
            "age":30

        }
]
```

### XML

```xml
<person>
    <person>
        <firstname>Mary</firstname>
        <lastname>River</lastname>
        <age>25</age>
    </person>
    <person>
        <firstname>Matt</firstname>
        <lastname>jones</lastname>
        <age>30</age>
    </person>

</person>
```

### CSV

```CSV
firstname,lastname,age
Mary,River,25
Matt,Jones,30
```

or

```csv
"firstname","lastname","age"
"Mary","River",25
"Matt","Jones",30

```

### ini

usually used for config info

```ini
;this is a comment in ini file
[database]
driver=mysql
host=localhost
port=3306
databasename=persondb
[user]
username=zeke
```
