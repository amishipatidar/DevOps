# AWS VPC (Virtual Private Cloud)

Networking blueprint and architectural notes on isolated AWS Virtual Private Clouds.

## Key Concepts
- **What is VPC?**: Logically isolated virtual network dedicated to an AWS account.
- **CIDR (Classless Inter-Domain Routing)**: IP address range allocation (e.g. `10.0.0.0/16`).
- **Subnets**: Subdivisions of a VPC IP range bounded to a single Availability Zone (Public vs Private subnets).
- **Route Tables**: Rules determining network traffic routing between subnets, gateways, and internet.
- **Internet Gateway (IGW)**: Allows public subnets direct communication with the public internet.
- **NAT Gateway**: Enables instances in private subnets to reach out to internet for updates while preventing inbound internet connections.
- **Security Groups vs NACLs**: Stateful instance-level firewalls vs Stateless subnet-level Network Access Control Lists.
