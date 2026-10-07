# AWS Database Services: DynamoDB & RDS

Comparative study on Managed NoSQL (DynamoDB) vs Relational Database Services (RDS).

## 1. DynamoDB (NoSQL)
- **Key Characteristics**: Fully managed key-value & document NoSQL database providing single-digit millisecond performance at any scale.
- **Data Model**: Tables  Items  Attributes.
- **Primary Keys**: Partition Key (HASH) and optional Sort Key (RANGE).
- **Use Cases**: High-throughput session stores, real-time gaming leaderboards, shopping carts.

## 2. RDS (Relational Database Service)
- **Key Characteristics**: Managed relational database engine supporting PostgreSQL, MySQL, MariaDB, Oracle, SQL Server, and Amazon Aurora.
- **Key Features**: Automated backups, multi-AZ deployment for high availability, read replicas for scaling read traffic.
- **Use Cases**: E-commerce transactional systems, financial ledger applications, enterprise ERP databases.
