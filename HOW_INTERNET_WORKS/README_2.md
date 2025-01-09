# OSI Model: How a Request Travels Through the Layers

The **OSI (Open Systems Interconnection)** model describes how data travels from a source to a destination across a network. It consists of **7 layers**, each with specific functions.

## 1. Physical Layer
**Functions:**
- **Bit Synchronization:** Ensures sender and receiver are synchronized.
- **Bit Rate Control:** Regulates the data transmission rate.
- **Line Configuration:** Defines physical connection (point-to-point or multipoint).
- **Transmission Media:** Manages cables, optical fibers, and wireless media.

## 2. Data Link Layer
**Functions:**
- **Unique Identification:** Ensures devices are uniquely identifiable.
- **MAC Addressing:** Assigns hardware addresses to devices.
- **Framing:** Divides data into manageable frames.
- **Physical Addressing:** Handles MAC addresses.
- **Flow Control:** Prevents data overload at the receiver.
- **Error Control:** Detects and corrects errors in frames.

**Sublayers:**
- **LLC (Logical Link Control):** Manages error checking and flow control.
- **MAC (Media Access Control):** Governs access to the physical medium.

## 3. Network Layer
**Functions:**
- **Logical Addressing:** Assigns IP addresses to devices.
- **Routing:** Determines the best path for data.
- **Packetizing:** Encapsulates data into packets.

**Use Cases:** Internetworking, addressing, routing, packet handling.

## 4. Transport Layer
**Functions:**
- **Port Addressing:** Identifies application processes.
- **Segmentation and Reassembly:** Divides and reassembles data.
- **Connection Control:** Establishes and manages connections.
- **Error Control:** Ensures data integrity.

**Protocols:** TCP (reliable), UDP (unreliable but faster).

## 5. Session Layer
**Functions:**
- **Session Establishment, Maintenance, and Termination:** Manages communication sessions.
- **Dialogue Control:** Coordinates communication between devices.
- **Synchronization:** Inserts checkpoints for data recovery.

## 6. Presentation Layer
**Functions:**
- **Translation:** Converts data between formats.
- **Compression:** Reduces data size for efficiency.
- **Encryption:** Secures data during transmission.

## 7. Application Layer
**Functions:**
- Interfaces with the user and applications.
- Provides network services such as file transfer, email, and remote access.

---

Each layer adds its own header or functionality to the data, and the process is reversed at the destination. This abstraction ensures seamless communication across diverse systems.
