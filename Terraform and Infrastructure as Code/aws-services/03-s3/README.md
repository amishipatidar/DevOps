# AWS S3 (Simple Storage Service)

Detailed architectural reference for AWS S3 object storage, bucket policies, versioning, and lifecycle management.

## Key Concepts
- **What is S3?**: Scalable, high-durability (99.999999999% durability) object storage service.
- **Buckets**: Universally unique namespace containers storing objects.
- **Objects**: File data up to 5TB along with key-value metadata tags.
- **Storage Classes**: Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier Instant Retrieval, Glacier Deep Archive.
- **Versioning**: Preserves, retrieves, and restores every version of every object stored in an S3 bucket.
- **Lifecycle Policies**: Automates object transition to cheaper storage classes or schedules object expiration.
- **Encryption**: Server-side encryption (SSE-S3, SSE-KMS, SSE-C) and client-side encryption.
