# The Three Pillars of Observability

Comprehensive guide on system telemetry, distributed tracing, structured logging, and Kubernetes observability.

## 1. Metrics (Numerical Time-Series)
- **Definition**: Aggregated numeric data points measured over time intervals (e.g., CPU %, Memory bytes, Request Latency).
- **Primary Tool**: Prometheus, Datadog.

## 2. Logs (Structured Event Records)
- **Definition**: Timestamped text records emitted when events take place (e.g. `[ERROR] Database connection failed`).
- **Primary Tool**: Grafana Loki, Fluentbit, ELK Stack (Elasticsearch, Logstash, Kibana).

## 3. Traces (Request Lifecycle Flow)
- **Definition**: End-to-end path of a user request traversing microservices, showing span durations and latency bottlenecks.
- **Primary Tool**: Jaeger, Zipkin, OpenTelemetry Collector.
