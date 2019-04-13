---
layout: default
title: API Documentation
---
Sending regular GET requests will be just fine.

# GET {{ site.url }}/apps.json

Return the contents of `{{ site.url }}/protfolio/` page, except `Atom` and `Open-Sources` parts.

```json
{
  "apps": [
      {
        "platform": "Platform, String",
        "name": "APP's Name, String",
        "lan": "Programming Language, String",
        "url": "URL, String",
        "available": "If available in any sotre, String of 1/0",
        "img": "Avatar URL, String"
      },
      { ... }
  ]
}

```

# GET {{ site.url }}/repos.json

Return the contents of `Open-Sources` part of `{{ site.url }}/protfolio/` page.

```json
{
  "repos": [
      {
        "name": "Name, String",
        "type": "Type, String, one of github and oschina",
        "url": "URL, String",
        "lan": "Programming language, String",
        "desc": "Description, String",
        "img": "Image URL, String",
      },
      { ... }
  ]
}

```

# GET {{ site.url }}/blogroll.json

Return the contents of `{{ site.url }}/blogroll/` page.

```json
{
  "blogroll": [
        {
            "img": "Avatar URL, String",
            "title": "Title, String",
            "url": "URL, String",
            "desc": "Description, String",
        },
        { ... }
    ]
}
```

# GET {{ site.url }}/docs.json

Return the contents of `{{ site.url }}/docs/` page.

```json
{
  "docs": [
    {
      "url": "URL, String",
      "title": "Title, String",
      "author": "Author, String",
      "image": "Image, String",
    },
    { ... }
  ],
}
```

# GET {{ site.url }}/posts.json

Return the contents of `{{ site.url }}/blogs/archives/` page.

```json
{
  "posts": [
      {
        "img": "Image URL of the post's catogory, String",
        "title": "Title, String",
        "date": "Formatted date, String",
        "url": "URL, String",
        "cate": "Post's category, String",
        "quote": "If the post was comes from internet, String of 1/0"
      },
      { ... }
  ]
}
```

# GET {{ site.url }}/tweets.json

Return the contents of `{{ site.url }}/tweets/` page.

```json
{
  "tweets": [
        {
            "content": "Content of the tweet, String",
            "from": "Tweeting devices, String",
            "img": [
                    "Image URL, String",
                    ],
            "date": "Formatted date, String",
            "url": "URL, String"
        },
        { ... }
  ]
}
```

<!-- # GET {{ site.url }}/vitae.json

Return the contents of `{{ site.url }}/vitae/` page.

```json
{
  "vitae": [
      {
        "type": "Title, String",
        "url": "URL, String",
        "author": "Author, String",
        "desc": "Description, String",
        "img": "Image URL, String",
      },
      { ... }
  ]
}
``` -->

# GET {{ site.url }}/readings.json

Return the contents of `{{ site.url }}/readings/` page.

```json
{
  "readings": [
      {
        "title": "Title, String",
        "url": "URL, String",
        "author": "Author, String",
        "img": "Image URL, String",
      },
      { ... }
  ]
}
```

{% include comment.html %}
