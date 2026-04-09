Circa June 2024

recommend:

- Honeycomb
- Datadog
- NewRelic

In that order if you're kinda mid-sized tech org who doesn't have a dedicated buyer. I'd say Dynatrace, Splunk and ServiceNow all seem to favor a huge enterprise pipeline and you can find some decent deals if you negotiate. But coming from a place that has integrated Dynatrace? It sucks to get full utilization. You're going to need an enterprise initiative and a team of people retrofitting other teams shit to do it, IMO.

Elastic cloud was fine... I think you can get a lot for cheap if all you want is logs and have an idea of retention window. ServiceNow logging is way cheaper.

IMO most small-medium tech companies should decide what they're okay with paying and either pay somebody on this board exactly that number for obs, making it clear you have no budget for overages - this will mean deleting data or less than ideal perf in many cases, or should roll their own for cheap. Highly recommend giving your top dollar number to quickwit.io and asking what they can do for that much, I bet you it's a lot more than competitors on this board.

Roll your own? Quickwit or Clickhouse are best cloud agnostic. You can get pretty far with a home grown s3 setup in aws or just using cloudwatch logs. Cloud logging in GCP or make a worse version with bigquery?. If you're in azure I'm sorry, and IDK what to tell you.

![](99%20-%20Assets/2025/2025-03-09-04-03-36.png)