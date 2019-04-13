---
layout: default
title: "Categories"
---
<table><tr><td>Category</td><td>Posts</td></tr>
{% for cat in site.categories %}<tr><td><a href="#{{ cat[0] | replace: ' ', '_' }}">{{ cat[0] | replace: '__', '\_\_' }}</a></td><td>{{ cat[1].size }}</td></tr>{% endfor %}
</table>
<hr>
{% for cat in site.categories %}
## <span id="{{ cat[0] | replace: ' ', '_' }}">{{ cat[0] | replace: '__', '\_\_' }}<sup>{{ cat[1].size }}</sup></span>
{% for post in cat[1] %}
* {{ post.date | date: "%b %d, %Y" }}&nbsp;&#124;&nbsp;[{{ post.title | replace: '__', '\_\_' }}]({{ site.url }}{{ post.url }})
{% endfor %}
{% endfor %}
