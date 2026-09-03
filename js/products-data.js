/**
 * INNOMENTIS ROBOTICS STORE — PRODUCT CATALOGUE DATASET
 * 35+ Educational Robotics Kits, Sensors, Motors, Electronics, & Accessories
 */

var PRODUCTS_DATA = [
  // ==========================================
  // 1. ROBOTICS KITS (5 Items)
  // ==========================================
  {
    id: "prod-kit-01",
    sku: "INM-KIT-001",
    name: "Beginner Robotics & Electronics Kit",
    slug: "beginner-robotics-kit",
    category: "Robotics Kits",
    price: 1499,
    availability: "In Stock",
    image: "images/1.jpg",
    short_description: "Hands-on starter kit with motors, chassis, sensors, and microcontrollers designed for Grade 3-8 learners.",
    detailed_description: "The Innomentis Beginner Robotics Kit is the ultimate entry point for young tech enthusiasts. Designed specifically for school-age students, this kit introduces fundamental concepts of electrical circuits, motor dynamics, and sensor inputs through fun, step-by-step physical project builds.",
    specifications: {
      "Target Age": "8 - 14 Years (Grade 3 - 8)",
      "Assembly Time": "45 - 60 Minutes per project",
      "Microcontroller": "Innomentis UNO Board (Arduino compatible)",
      "Battery Type": "9V Battery / 4xAA Pack Included",
      "No. of Projects": "12+ Guided Experiment Manual",
      "Warranty": "6 Months Innomentis Hardware Guarantee"
    },
    whats_included: [
      "1x Acrylic Smart Robot Chassis",
      "2x BO High-Torque Gear Motors & Wheels",
      "1x Innomentis UNO Microcontroller",
      "1x L298N Motor Driver Module",
      "1x HC-SR04 Ultrasonic Distance Sensor",
      "1x Solderless Breadboard (400 points)",
      "40x Multi-color Jumper Wires",
      "1x Illustrated Step-by-Step Project Book"
    ],
    ideal_for: [
      "School STEM projects & Science Fairs",
      "Robotics beginners starting from scratch",
      "Hands-on logical thinking & spatial building",
      "Home experimentation & parental bonding"
    ],
    compatibility: "Compatible with Arduino IDE, Scratch 3.0 visual block coding, and standard 5V electronics.",
    recommended_accessories: ["prod-acc-01", "prod-ele-03"]
  },
  {
    id: "prod-kit-02",
    sku: "INM-KIT-002",
    name: "Smart 2WD Obstacle Avoidance Car Kit",
    slug: "smart-car-robotics-kit",
    category: "Robotics Kits",
    price: 2199,
    availability: "In Stock",
    image: "images/HOME 1.jpg",
    short_description: "Autonomous robot car kit equipped with ultrasonic radar and servo motor scanning for smart navigation.",
    detailed_description: "Build an autonomous self-driving robot car! The Smart 2WD Obstacle Avoidance Kit teaches students how autonomous vehicles perceive obstacles using ultrasonic sound waves, calculate alternative routes in real-time, and control dual-motor drive systems.",
    specifications: {
      "Target Age": "10+ Years",
      "Drive System": "2WD Dual BO Motor Drive",
      "Radar Range": "2cm to 400cm Ultrasonic Sensing",
      "Servo Sweep": "180-Degree Steering Servo",
      "Programming": "C++ / Arduino IDE / Block Coding",
      "Chassis Material": "Laser-Cut Acrylic Frame"
    },
    whats_included: [
      "1x Dual-layer Acrylic Robot Body Chassis",
      "2x Rubber Grip Wheels + 1x Caster Wheel",
      "1x SG90 Servo Motor with Radar Bracket",
      "1x Ultrasonic HC-SR04 Sensor",
      "1x Sensor Shield v5 Expansion Board",
      "1x 18650 Dual Battery Holder with Switch",
      "Complete Mounting Screws & Standoffs"
    ],
    ideal_for: [
      "Autonomous robotics workshops",
      "Learning conditional logic (If-Else loops)",
      "School robotics competitions",
      "Intermediate young programmers"
    ],
    compatibility: "Supports Arduino IDE, MBlock, and custom C++ scripts.",
    recommended_accessories: ["prod-acc-02", "prod-sen-06"]
  },
  {
    id: "prod-kit-03",
    sku: "INM-KIT-003",
    name: "Precision Line Following Robot Kit",
    slug: "line-following-robot-kit",
    category: "Robotics Kits",
    price: 1899,
    availability: "In Stock",
    image: "images/3.jpg",
    short_description: "Build a high-speed line tracking robot using dual IR optical ground sensors and dynamic speed regulation.",
    detailed_description: "Line following is a cornerstone of industrial automation and warehouse robotics. This precision kit guides students through building a robot capable of tracing black or white circuit pathways using dual infrared reflectance sensors and motor speed modulation.",
    specifications: {
      "Target Age": "9 - 16 Years",
      "Sensor Type": "Dual IR Ground Trackers",
      "Speed Regulation": "PWM Differential Motor Speed",
      "Power Source": "7.4V Li-ion / 9V DC",
      "Track Included": "1x Black Line Practice Track Mat"
    },
    whats_included: [
      "1x Compact Line Tracker Chassis",
      "2x IR Reflectance Ground Sensors",
      "1x Innomentis Micro Controller Board",
      "1x Dual Channel Motor Driver Shield",
      "2x High-RPM DC Motors",
      "1x Printed Vinyl Track Circuit Mat"
    ],
    ideal_for: [
      "School RTC Fest & Line Follower races",
      "Understanding optical reflectance principles",
      "PID speed tuning fundamentals"
    ],
    compatibility: "Plug-and-play with Innomentis sensor shields.",
    recommended_accessories: ["prod-sen-02", "prod-ele-05"]
  },
  {
    id: "prod-kit-04",
    sku: "INM-KIT-004",
    name: "Advanced AI & IoT Smart Home Automation Kit",
    slug: "advanced-ai-iot-smart-home-kit",
    category: "Robotics Kits",
    price: 3499,
    availability: "Low Stock",
    image: "images/AI.jpg",
    short_description: "ESP32-powered home automation kit with Wi-Fi control, voice triggers, light sensors, and cloud telemetry.",
    detailed_description: "Dive into modern Artificial Intelligence and Internet of Things! This comprehensive kit empowers advanced students to construct a miniature smart home featuring mobile app control, voice command triggers, automatic lighting, and temperature monitoring.",
    specifications: {
      "Target Age": "12+ Years (Grade 7 - 12)",
      "Wireless": "Wi-Fi 802.11 b/g/n + Bluetooth 4.2",
      "Core Microcontroller": "ESP32 Dual-Core 240MHz MCU",
      "Cloud Protocol": "MQTT / HTTP Web App",
      "Display": "0.96 inch OLED I2C Display"
    },
    whats_included: [
      "1x ESP32 Wi-Fi + Bluetooth Dev Board",
      "1x Miniature Laser-Cut Smart House Model",
      "1x 4-Channel Relay Control Module",
      "1x DHT11 Temp & Humidity Sensor",
      "1x LDR Ambient Light Sensor",
      "1x 0.96 inch Blue OLED Display",
      "1x Buzzer & RGB Status LED Strip",
      "1x Web & Mobile App Source Code Guide"
    ],
    ideal_for: [
      "High school AI & IoT innovation projects",
      "Learning cloud programming & web sockets",
      "Smart city & home automation showcases"
    ],
    compatibility: "Arduino IDE, MicroPython, ESP-IDF, Blynk App.",
    recommended_accessories: ["prod-sen-03", "prod-sen-06"]
  },
  {
    id: "prod-kit-05",
    sku: "INM-KIT-005",
    name: "4-DOF Robotic Arm Mechanical Assembly Kit",
    slug: "4dof-robotic-arm-kit",
    category: "Robotics Kits",
    price: 2799,
    availability: "In Stock",
    image: "images/4.jpg",
    short_description: "Acrylic 4-axis robotic arm with 4 precision micro servos and analog joystick remote controllers.",
    detailed_description: "Experience industrial robotics engineering in your classroom! This 4-Degrees-Of-Freedom arm simulates factory pick-and-place automation. Includes 4 metal gear servos, joystick controllers, and claw grabber.",
    specifications: {
      "Degree of Freedom": "4 Axes (Base, Shoulder, Elbow, Claw)",
      "Servo Motors": "4x SG90 / MG90S Micro Servos",
      "Control Interface": "Dual Axis Analog Joysticks",
      "Max Payload": "120 grams"
    },
    whats_included: [
      "1x Laser-cut Acrylic Arm Frame Parts",
      "4x SG90 Servo Motors",
      "2x Dual-Axis Joystick Modules",
      "1x Servo Driver Expansion Shield",
      "All Nuts, Bolts & Acrylic Spacers"
    ],
    ideal_for: [
      "Kinematics & mechanical dynamics study",
      "Pick-and-place automation practice",
      "STEM robotics club competitions"
    ],
    compatibility: "Arduino Uno, Mega, ESP32, and Raspberry Pi.",
    recommended_accessories: ["prod-mot-02", "prod-ele-01"]
  },

  // ==========================================
  // 2. SENSORS & MODULES (8 Items)
  // ==========================================
  {
    id: "prod-sen-01",
    sku: "INM-SEN-001",
    name: "HC-SR04 Ultrasonic Distance Sensor",
    slug: "hc-sr04-ultrasonic-sensor",
    category: "Sensors & Modules",
    price: 189,
    availability: "In Stock",
    image: "images/2.jpg",
    short_description: "High accuracy sonar distance measuring sensor module (2cm to 400cm detection range).",
    detailed_description: "The HC-SR04 ultrasonic sensor provides non-contact measurement from 2cm to 400cm with a range accuracy up to 3mm. Ideal for obstacle detection in smart cars and height measurement devices.",
    specifications: {
      "Operating Voltage": "5V DC",
      "Measuring Range": "2cm - 400cm",
      "Measuring Angle": "15 Degrees",
      "Trigger Input Signal": "10us TTL Pulse"
    },
    whats_included: ["1x HC-SR04 Ultrasonic Sensor Module"],
    ideal_for: ["Robot obstacle avoidance", "Distance measurement projects"],
    compatibility: "5V microcontrollers (Arduino, Raspberry Pi with level shifter).",
    recommended_accessories: ["prod-ele-07"]
  },
  {
    id: "prod-sen-02",
    sku: "INM-SEN-002",
    name: "Infrared (IR) Obstacle & Line Sensor Module",
    slug: "ir-obstacle-line-sensor",
    category: "Sensors & Modules",
    price: 79,
    availability: "In Stock",
    image: "images/5.jpg",
    short_description: "Single channel IR transmitter & receiver module with adjustable sensitivity potentiometer.",
    detailed_description: "Versatile infrared proximity and reflectance sensor. Features an onboard LM393 comparator and trimmer potentiometer to fine-tune detection distance (2cm-30cm).",
    specifications: {
      "Operating Voltage": "3.3V - 5V DC",
      "Detection Angle": "35 Degrees",
      "Output Type": "Digital TTL (0/1 High-Low)"
    },
    whats_included: ["1x IR Proximity Sensor Board"],
    ideal_for: ["Line tracking", "Proximity counting", "Robotics boundary detection"],
    compatibility: "Arduino, ESP32, STM32, Raspberry Pi.",
    recommended_accessories: ["prod-ele-07"]
  },
  {
    id: "prod-sen-03",
    sku: "INM-SEN-003",
    name: "DHT11 Digital Temperature & Humidity Sensor",
    slug: "dht11-temperature-humidity-sensor",
    category: "Sensors & Modules",
    price: 149,
    availability: "In Stock",
    image: "images/6.jpg",
    short_description: "Calibrated digital output sensor module for measuring ambient temperature and relative humidity.",
    detailed_description: "The DHT11 features a calibrated digital signal output with temperature measurement from 0°C to 50°C and humidity measurement from 20% to 90% RH.",
    specifications: {
      "Temperature Range": "0 to 50°C (±2°C accuracy)",
      "Humidity Range": "20 to 90% RH (±5% accuracy)",
      "Interface": "Single-Wire Serial Digital"
    },
    whats_included: ["1x DHT11 Sensor Module with 3-Pin Cable"],
    ideal_for: ["Weather stations", "Greenhouse monitoring", "IoT climate trackers"],
    compatibility: "All standard 3.3V/5V microcontrollers.",
    recommended_accessories: ["prod-ele-01"]
  },
  {
    id: "prod-sen-04",
    sku: "INM-SEN-004",
    name: "LDR Photoresistor Light Sensor Module",
    slug: "ldr-light-sensor-module",
    category: "Sensors & Modules",
    price: 69,
    availability: "In Stock",
    image: "images/Image 10.jpg",
    short_description: "Light dependent resistor sensor module providing both analog intensity and digital threshold outputs.",
    detailed_description: "Detect light levels automatically. Equipped with LM393 comparator chip, digital threshold trigger potentiometer, and raw analog output pin.",
    specifications: {
      "Operating Voltage": "3.3V - 5V",
      "Output Format": "Digital DO (0 and 1) & Analog AO"
    },
    whats_included: ["1x LDR Light Sensor Module"],
    ideal_for: ["Automatic night lamps", "Solar trackers", "Smart street lights"],
    compatibility: "Universal microcontroller pin compatible.",
    recommended_accessories: ["prod-ele-07"]
  },
  {
    id: "prod-sen-05",
    sku: "INM-SEN-005",
    name: "HC-SR501 PIR Human Motion Detector Sensor",
    slug: "pir-motion-detector-sensor",
    category: "Sensors & Modules",
    price: 199,
    availability: "In Stock",
    image: "images/Image 11.jpg",
    short_description: "Pyroelectric infrared motion sensor module with adjustable delay time and detection sensitivity.",
    detailed_description: "Detect human movement up to 7 meters away. Features dual sensitivity and delay adjustment trimmers, ideal for security alarms and motion-triggered lighting.",
    specifications: {
      "Sensing Range": "3 to 7 meters (120 Degree Cone)",
      "Delay Time": "0.3s to 5 minutes adjustable",
      "Voltage": "4.5V - 20V DC input"
    },
    whats_included: ["1x HC-SR501 PIR Motion Sensor"],
    ideal_for: ["Security alarms", "Automatic room lights", "Burglar detectors"],
    compatibility: "Arduino, Raspberry Pi, ESP8266.",
    recommended_accessories: ["prod-ele-01"]
  },
  {
    id: "prod-sen-06",
    sku: "INM-SEN-006",
    name: "HC-05 Wireless Bluetooth Master/Slave Module",
    slug: "hc05-bluetooth-module",
    category: "Sensors & Modules",
    price: 389,
    availability: "In Stock",
    image: "images/AI.jpg",
    short_description: "Serial Bluetooth transceiver module enabling smartphone remote control of microcontrollers.",
    detailed_description: "Control your custom robots wirelessly from any Android smartphone or PC via Bluetooth serial communication.",
    specifications: {
      "Bluetooth Protocol": "Bluetooth v2.0 + EDR",
      "Frequency": "2.4GHz ISM Band",
      "Baud Rate": "9600 (Default serial output)"
    },
    whats_included: ["1x HC-05 Bluetooth Transceiver Module"],
    ideal_for: ["Smartphone controlled robots", "Wireless telemetry"],
    compatibility: "Arduino, PIC, ARM, Raspberry Pi.",
    recommended_accessories: ["prod-kit-02"]
  },
  {
    id: "prod-sen-07",
    sku: "INM-SEN-007",
    name: "MPU-6050 6-DOF Gyroscope & Accelerometer Module",
    slug: "mpu6050-gyro-accelerometer",
    category: "Sensors & Modules",
    price: 249,
    availability: "In Stock",
    image: "images/1.jpg",
    short_description: "3-Axis gyroscope and 3-axis accelerometer I2C sensor for balancing robots and orientation tracking.",
    detailed_description: "Combines a 3-axis gyroscope and a 3-axis accelerometer on a single chip with an onboard Digital Motion Processor (DMP) for 3D orientation calculations.",
    specifications: {
      "Communication": "I2C Protocol Standard",
      "Gyro Range": "±250, 500, 1000, 2000 °/s",
      "Accel Range": "±2g, ±4g, ±8g, ±16g"
    },
    whats_included: ["1x MPU-6050 Module", "1x Straight & Right-Angle Pin Headers"],
    ideal_for: ["Self-balancing two-wheel robots", "Drone flight stabilization", "Motion gesture controllers"],
    compatibility: "Arduino, ESP32, STM32.",
    recommended_accessories: ["prod-ele-02"]
  },
  {
    id: "prod-sen-08",
    sku: "INM-SEN-008",
    name: "Sound & Acoustic Detection Sensor Module",
    slug: "sound-acoustic-detection-sensor",
    category: "Sensors & Modules",
    price: 89,
    availability: "In Stock",
    image: "images/2.jpg",
    short_description: "High-sensitivity microphone sensor module for clap detection and environmental sound monitoring.",
    detailed_description: "Detects acoustic vibrations and sound waves. Onboard potentiometer allows setting precise clap or noise threshold limits.",
    specifications: {
      "Operating Voltage": "3.3V - 5V",
      "Microphone Type": "Electret Condenser Capsule"
    },
    whats_included: ["1x Sound Sensor Module"],
    ideal_for: ["Clap-controlled switches", "Noise level monitors", "Voice-activated toys"],
    compatibility: "Universal 3-pin interface.",
    recommended_accessories: ["prod-ele-07"]
  },

  // ==========================================
  // 3. MOTORS & MOTION (6 Items)
  // ==========================================
  {
    id: "prod-mot-01",
    sku: "INM-MOT-001",
    name: "Dual Shaft BO Gear Motor (3-12V DC)",
    slug: "dual-shaft-bo-gear-motor",
    category: "Motors & Motion",
    price: 85,
    availability: "In Stock",
    image: "images/3.jpg",
    short_description: "High torque yellow BO gear motor with dual shafts for chassis mounting and encoder disc attachment.",
    detailed_description: "Standard gear motor designed for small mobile robots. Plastic gearbox offers optimal balance between torque and speed for 2WD and 4WD robot platforms.",
    specifications: {
      "Operating Voltage": "3V to 12V DC (6V Recommended)",
      "No Load Speed": "125 RPM @ 6V",
      "Torque": "0.8 kg.cm @ 6V"
    },
    whats_included: ["1x Dual Shaft BO Gear Motor"],
    ideal_for: ["Smart cars", "Line followers", "Obstacle avoidance chassis"],
    compatibility: "Fits all standard yellow robot wheels.",
    recommended_accessories: ["prod-mot-04", "prod-mot-05"]
  },
  {
    id: "prod-mot-02",
    sku: "INM-MOT-002",
    name: "SG90 Micro Servo Motor 9g (180 Degree)",
    slug: "sg90-micro-servo-motor",
    category: "Motors & Motion",
    price: 135,
    availability: "In Stock",
    image: "images/4.jpg",
    short_description: "Lightweight 9g micro servo motor with horns and mounting screws for steering and mechanism control.",
    detailed_description: "Tiny yet powerful 180-degree rotation servo motor. Perfect for positioning radar sensors, robot arms, steering linkages, and miniature grippers.",
    specifications: {
      "Rotation": "180 Degrees",
      "Stall Torque": "1.8 kg-cm @ 4.8V",
      "Operating Speed": "0.1 sec / 60 degrees"
    },
    whats_included: ["1x SG90 Micro Servo Motor", "3x Plastic Servo Horn Arms", "3x Mounting Screws"],
    ideal_for: ["Robotic arms", "Radar sensor panning", "RC steering"],
    compatibility: "Standard Servo Library in Arduino & MicroPython.",
    recommended_accessories: ["prod-kit-05"]
  },
  {
    id: "prod-mot-03",
    sku: "INM-MOT-003",
    name: "L298N Dual H-Bridge Motor Driver Module",
    slug: "l298n-dual-motor-driver-module",
    category: "Motors & Motion",
    price: 220,
    availability: "In Stock",
    image: "images/5.jpg",
    short_description: "High-power motor driver controller capable of driving two DC motors or one 4-wire stepper motor.",
    detailed_description: "Industrial strength motor driver module using the L298N IC. Built-in 5V regulator, heavy aluminum heatsink, and individual directional control pins.",
    specifications: {
      "Drive Voltage": "5V - 35V DC",
      "Peak Current": "2A per bridge / channel",
      "Board Dimensions": "43mm x 43mm x 27mm"
    },
    whats_included: ["1x L298N Motor Driver Board with Aluminum Heatsink"],
    ideal_for: ["High current DC motor driving", "PWM speed regulation"],
    compatibility: "All 3.3V and 5V microcontrollers.",
    recommended_accessories: ["prod-mot-01"]
  },
  {
    id: "prod-mot-04",
    sku: "INM-MOT-004",
    name: "High Grip Rubber Wheels for BO Motor (65mm)",
    slug: "rubber-wheels-65mm-bo-motor",
    category: "Motors & Motion",
    price: 55,
    availability: "In Stock",
    image: "images/6.jpg",
    short_description: "65mm diameter rubber tire wheel with deep tread grip designed for BO motor shafts.",
    detailed_description: "Durable plastic wheel with high-friction silicone rubber tread to prevent slipping on smooth wooden or tiled surfaces during robot maneuvers.",
    specifications: {
      "Wheel Diameter": "65mm",
      "Tire Width": "26mm",
      "Center Hole": "Double-D Flat Shaft fit"
    },
    whats_included: ["1x 65mm Rubber Grip Wheel"],
    ideal_for: ["Mobile robot traction", "Custom DIY vehicles"],
    compatibility: "BO Gear Motors.",
    recommended_accessories: ["prod-mot-01"]
  },
  {
    id: "prod-mot-05",
    sku: "INM-MOT-005",
    name: "28BYJ-48 Stepper Motor + ULN2003 Driver Board",
    slug: "28byj48-stepper-motor-uln2003-driver",
    category: "Motors & Motion",
    price: 195,
    availability: "In Stock",
    image: "images/1.jpg",
    short_description: "5V 4-phase gear stepper motor with ULN2003 Darlington transistor driver board and status LEDs.",
    detailed_description: "Precision angular motor setup providing exact degree rotation increments for indexing tables, 3D printers, and mechanical dials.",
    specifications: {
      "Step Angle": "5.625 x 1/64",
      "Voltage": "5V DC",
      "Reduction Ratio": "1:64"
    },
    whats_included: ["1x 28BYJ-48 Stepper Motor", "1x ULN2003 Driver Module"],
    ideal_for: ["Precision positioning", "Clock mechanisms", "Automated valves"],
    compatibility: "Arduino Stepper Library, ESP32.",
    recommended_accessories: ["prod-ele-01"]
  },
  {
    id: "prod-mot-06",
    sku: "INM-MOT-006",
    name: "MG996R Metal Gear High Torque Servo Motor",
    slug: "mg996r-metal-gear-servo-motor",
    category: "Motors & Motion",
    price: 449,
    availability: "In Stock",
    image: "images/2.jpg",
    short_description: "Heavy-duty full metal gear servo motor with 11kg/cm torque for heavy load robotics arms.",
    detailed_description: "Upgrade your robotics builds with indestructible brass metal gears and dual ball bearings. Delivers up to 11kg.cm torque at 6V.",
    specifications: {
      "Gear Type": "Full Metal Brass Gears",
      "Torque": "11 kg/cm @ 6.0V",
      "Weight": "55g"
    },
    whats_included: ["1x MG996R Metal Servo Motor", "1x Metal Servo Arm Disc", "Mounting Hardware"],
    ideal_for: ["Heavy arm grippers", "Bipedal walking robots", "RC cars"],
    compatibility: "5V - 7.2V external power setups.",
    recommended_accessories: ["prod-kit-05"]
  },

  // ==========================================
  // 4. ELECTRONICS & MICROCONTROLLERS (10 Items)
  // ==========================================
  {
    id: "prod-ele-01",
    sku: "INM-ELE-001",
    name: "Innomentis UNO R3 Board (ATmega328P DIP)",
    slug: "innomentis-uno-r3-board",
    category: "Electronics",
    price: 549,
    availability: "In Stock",
    image: "images/HOME 1.jpg",
    short_description: "Flagship 100% Arduino-compatible microcontroller development board for STEM education.",
    detailed_description: "The classic heart of physical computing. Featuring 14 digital I/O pins, 6 analog inputs, 16 MHz crystal oscillator, and USB Type-B programming interface.",
    specifications: {
      "Microcontroller": "ATmega328P (Removable DIP)",
      "Operating Voltage": "5V DC",
      "Input Voltage": "7V - 12V DC (Barrel Jack)",
      "Flash Memory": "32 KB",
      "Clock Speed": "16 MHz"
    },
    whats_included: ["1x Innomentis UNO R3 Microcontroller Board", "1x High-Quality USB Type-A to B Cable (50cm)"],
    ideal_for: ["Standard robotics programming", "Classroom ed-tech training"],
    compatibility: "100% Arduino IDE, Scratch 3.0, Tinkercad Circuits.",
    recommended_accessories: ["prod-ele-06", "prod-ele-07"]
  },
  {
    id: "prod-ele-02",
    sku: "INM-ELE-002",
    name: "ESP32 NodeMCU Wi-Fi + Bluetooth Dev Board",
    slug: "esp32-nodemcu-wifi-bluetooth-board",
    category: "Electronics",
    price: 499,
    availability: "In Stock",
    image: "images/AI.jpg",
    short_description: "Dual-core 240MHz microcontroller featuring built-in Wi-Fi, Bluetooth LE, and touch sensors.",
    detailed_description: "Powerhouse microcontroller for IoT and AI prototyping. Features integrated 2.4GHz Wi-Fi, Bluetooth v4.2, hall effect sensors, and 38 GPIO pins.",
    specifications: {
      "CPU": "Xtensa Dual-Core 32-bit LX6 (240MHz)",
      "SRAM": "520 KB",
      "Wireless": "802.11 b/g/n + BLE 4.2",
      "USB Chip": "CP2102 / CH340 Serial Conversion"
    },
    whats_included: ["1x ESP32 38-Pin Development Board"],
    ideal_for: ["IoT smart house projects", "Cloud robotics", "Mobile app control"],
    compatibility: "Arduino IDE, MicroPython, ESP-IDF.",
    recommended_accessories: ["prod-sen-03"]
  },
  {
    id: "prod-ele-03",
    sku: "INM-ELE-003",
    name: "Raspberry Pi Pico Board (Dual-Core RP2040)",
    slug: "raspberry-pi-pico-board",
    category: "Electronics",
    price: 425,
    availability: "In Stock",
    image: "images/3.jpg",
    short_description: "Official Raspberry Pi microcontroller board powered by RP2040 chip with MicroPython support.",
    detailed_description: "High performance micro-board featuring flexible digital interfaces, 26 multi-function GPIO pins, and dual ARM Cortex-M0+ processors.",
    specifications: {
      "Processor": "Dual-Core ARM Cortex M0+ @ 133MHz",
      "SRAM": "264 KB",
      "Onboard Flash": "2 MB QSPI",
      "Programmable I/O": "8x PIO State Machines"
    },
    whats_included: ["1x Raspberry Pi Pico Board (Pre-soldered Pin Headers)"],
    ideal_for: ["MicroPython robotics coding", "Embedded hardware experimentation"],
    compatibility: "MicroPython, C/C++ SDK, Thonny IDE.",
    recommended_accessories: ["prod-ele-06"]
  },
  {
    id: "prod-ele-04",
    sku: "INM-ELE-004",
    name: "Arduino Nano V3.0 (ATmega328P CH340)",
    slug: "arduino-nano-v3-board",
    category: "Electronics",
    price: 320,
    availability: "In Stock",
    image: "images/4.jpg",
    short_description: "Ultra-compact microcontroller board optimized for mini breadboards and lightweight robotics.",
    detailed_description: "All the power of the Arduino UNO in a breadboard-friendly footprint. Perfect for compact drone electronics and miniature line trackers.",
    specifications: {
      "Form Factor": "Breadboard DIP 30-pin",
      "Microcontroller": "ATmega328P",
      "USB Port": "Mini-USB / Micro-USB Interface"
    },
    whats_included: ["1x Arduino Nano V3.0 Board", "1x USB Cable"],
    ideal_for: ["Compact project enclosures", "Wearable STEM electronics"],
    compatibility: "Arduino IDE, mBlock.",
    recommended_accessories: ["prod-ele-06"]
  },
  {
    id: "prod-ele-05",
    sku: "INM-ELE-005",
    name: "Sensor Shield V5.0 Expansion Board for UNO",
    slug: "sensor-shield-v5-expansion-board",
    category: "Electronics",
    price: 180,
    availability: "In Stock",
    image: "images/5.jpg",
    short_description: "Plug-and-play expansion shield providing dedicated 3-pin G-V-S connectors for all sensors and servos.",
    detailed_description: "Eliminate wire clutter! The Sensor Shield V5 mounts directly onto your Arduino UNO, giving every pin its own 5V Power (V), Ground (G), and Signal (S) lines.",
    specifications: {
      "Compatibility": "Arduino UNO R3, Leonardo, Mega",
      "Interfaces": "I2C, Bluetooth, APC220, SD Card, Servo ports"
    },
    whats_included: ["1x Sensor Shield V5.0 Board"],
    ideal_for: ["Easy multi-servo wiring", "Clean student wiring setups"],
    compatibility: "Fits standard Arduino UNO headers.",
    recommended_accessories: ["prod-ele-01"]
  },
  {
    id: "prod-ele-06",
    sku: "INM-ELE-006",
    name: "MB-102 Solderless Breadboard (830 Tie-Points)",
    slug: "mb102-solderless-breadboard-830",
    category: "Electronics",
    price: 120,
    availability: "In Stock",
    image: "images/6.jpg",
    short_description: "Full-size prototyping breadboard with dual power rails and adhesive backing.",
    detailed_description: "Essential prototyping tool for creating reusable circuits without soldering. Features nickel-plated spring clips and printed coordinate grid.",
    specifications: {
      "Tie-Points": "830 Points (630 IC terminal + 200 power bus)",
      "Wire Size": "Accepts 20-29 AWG jumper wires"
    },
    whats_included: ["1x MB-102 830-Point Breadboard"],
    ideal_for: ["Circuit prototyping", "Classroom electronics labs"],
    compatibility: "All standard electronic components & DIP ICs.",
    recommended_accessories: ["prod-ele-07", "prod-ele-08"]
  },
  {
    id: "prod-ele-07",
    sku: "INM-ELE-007",
    name: "Multicolor Jumper Wire Combo Pack (120 Pieces)",
    slug: "jumper-wire-combo-pack-120pcs",
    category: "Electronics",
    price: 240,
    availability: "In Stock",
    image: "images/1.jpg",
    short_description: "Complete set of 40x Male-to-Male, 40x Male-to-Female, and 40x Female-to-Female ribbon cables.",
    detailed_description: "High quality 20cm flexible copper jumper wires with durable molded pin ends. Color-coded in 10 rainbow shades for clear circuit troubleshooting.",
    specifications: {
      "Cable Length": "20cm (8 inches)",
      "Pin Gauge": "2.54mm Standard Pitch",
      "Quantity": "120 Total Wires (3 Packs of 40)"
    },
    whats_included: ["40x Male to Male Wires", "40x Male to Female Wires", "40x Female to Female Wires"],
    ideal_for: ["Breadboard wiring", "Sensor module connections"],
    compatibility: "Standard 2.54mm pin headers.",
    recommended_accessories: ["prod-ele-06"]
  },
  {
    id: "prod-ele-08",
    sku: "INM-ELE-008",
    name: "Ultimate Electronics Component Starter Box",
    slug: "ultimate-electronics-component-starter-box",
    category: "Electronics",
    price: 399,
    availability: "In Stock",
    image: "images/2.jpg",
    short_description: "Assorted component box with 100+ resistors, LEDs, tactile buttons, potentiometers, and capacitors.",
    detailed_description: "Never run out of basic components! This organized storage box contains color LEDs (Red, Green, Blue, Yellow, White), 1/4W metal film resistors, push buttons, and 10k pots.",
    specifications: {
      "LEDs": "30x 5mm LEDs (5 colors x 6)",
      "Resistors": "75x 1/4W Resistors (100Ω, 220Ω, 1kΩ, 10kΩ, 100kΩ)",
      "Switches": "10x Tactile Push Buttons with Caps"
    },
    whats_included: ["1x Plastic Organizer Box", "30x LEDs", "75x Resistors", "10x Buttons", "2x 10k Potentiometers", "1x Active Buzzer"],
    ideal_for: ["Basic circuit theory", "Student home lab stock"],
    compatibility: "Works with all microcontrollers.",
    recommended_accessories: ["prod-ele-06"]
  },
  {
    id: "prod-ele-09",
    sku: "INM-ELE-009",
    name: "0.96-inch OLED Graphic Display Module (I2C Blue)",
    slug: "096-oled-display-module-i2c",
    category: "Electronics",
    price: 260,
    availability: "In Stock",
    image: "images/3.jpg",
    short_description: "Self-illuminating 128x64 pixel OLED screen module with 4-pin I2C communication interface.",
    detailed_description: "Display graphics, sensor telemetry data, and text animations with ultra-crisp resolution and zero backlight power drain.",
    specifications: {
      "Resolution": "128 x 64 pixels",
      "Display Color": "Bright Blue on Black",
      "Driver IC": "SSD1306",
      "Protocol": "I2C (Address 0x3C / 0x3D)"
    },
    whats_included: ["1x 0.96 inch OLED I2C Display Board"],
    ideal_for: ["Sensor status readouts", "Mini robot faces & UI menus"],
    compatibility: "Adafruit_SSD1306 library for Arduino & MicroPython.",
    recommended_accessories: ["prod-ele-02"]
  },
  {
    id: "prod-ele-10",
    sku: "INM-ELE-010",
    name: "5V 2-Channel Optocoupler Relay Module",
    slug: "5v-2channel-relay-module",
    category: "Electronics",
    price: 155,
    availability: "Out of Stock",
    image: "images/4.jpg",
    short_description: "Isolated relay switch module for controlling high-voltage appliances from microcontrollers.",
    detailed_description: "Safely switch AC lights, fans, or high current motors up to 250V AC / 10A using low voltage 5V signal logic.",
    specifications: {
      "Relay Capacity": "10A 250V AC / 10A 30V DC",
      "Isolation": "Optocoupler Protection Logic",
      "Trigger Signal": "Low Level Trigger (0V)"
    },
    whats_included: ["1x 2-Channel 5V Relay Module"],
    ideal_for: ["Home automation", "AC load switching"],
    compatibility: "Arduino, ESP8266, ESP32.",
    recommended_accessories: ["prod-ele-02"]
  },

  // ==========================================
  // 5. ACCESSORIES & HARDWARE (6 Items)
  // ==========================================
  {
    id: "prod-acc-01",
    sku: "INM-ACC-001",
    name: "Transparent Acrylic 2WD Robot Chassis Plate",
    slug: "acrylic-2wd-robot-chassis-plate",
    category: "Accessories",
    price: 199,
    availability: "In Stock",
    image: "images/5.jpg",
    short_description: "Laser-cut 4mm transparent acrylic mainboard with pre-drilled motor and sensor mounting slots.",
    detailed_description: "Heavy-duty acrylic structural plate featuring pre-cut mounting holes for BO motors, battery holders, line sensors, and Arduino boards.",
    specifications: {
      "Material": "Cast Acrylic (Clear Glass Look)",
      "Dimensions": "200mm x 140mm x 3mm",
      "Cutouts": "Universal standard pin spacing"
    },
    whats_included: ["1x Laser-Cut Acrylic Baseplate", "Protective Paper Film"],
    ideal_for: ["Custom robot chassis building", "Scratched chassis replacement"],
    compatibility: "Standard BO Motors & Castor Wheels.",
    recommended_accessories: ["prod-mot-01", "prod-acc-03"]
  },
  {
    id: "prod-acc-02",
    sku: "INM-ACC-002",
    name: "18650 Dual Battery Holder Case with Switch",
    slug: "18650-dual-battery-holder-switch",
    category: "Accessories",
    price: 110,
    availability: "In Stock",
    image: "images/6.jpg",
    short_description: "Series battery enclosure for 2x 3.7V 18650 Li-ion rechargeable batteries with ON/OFF switch.",
    detailed_description: "Provides a reliable 7.4V DC output power supply for robot motor drivers with heavy duty wire leads and slide power switch.",
    specifications: {
      "Battery Slot": "2x 18650 Li-ion Cells (7.4V Total)",
      "Wire Leads": "15cm Red/Black Tinned Leads",
      "Switch": "Integrated ON/OFF Rocker Switch"
    },
    whats_included: ["1x Dual 18650 Battery Enclosure"],
    ideal_for: ["Robotics high current power", "Wireless projects"],
    compatibility: "Standard 18650 Li-ion cells.",
    recommended_accessories: ["prod-kit-02"]
  },
  {
    id: "prod-acc-03",
    sku: "INM-ACC-003",
    name: "360-Degree Swivel Steel Ball Caster Wheel",
    slug: "360-steel-ball-caster-wheel",
    category: "Accessories",
    price: 65,
    availability: "In Stock",
    image: "images/1.jpg",
    short_description: "Smooth rolling stainless steel ball caster for third balance point on 2WD robots.",
    detailed_description: "Frictionless omnidirectional swivel caster wheel that supports the rear weight of 2WD mobile robots without restricting turning radius.",
    specifications: {
      "Ball Material": "Stainless Steel (15mm Diameter)",
      "Base Plate": "Stamped Steel with 2 Screw Mounting Holes"
    },
    whats_included: ["1x 15mm Steel Ball Caster Wheel"],
    ideal_for: ["2WD Robot balancing", "Smooth turning vehicles"],
    compatibility: "Mounts to any flat chassis plate.",
    recommended_accessories: ["prod-acc-01"]
  },
  {
    id: "prod-acc-04",
    sku: "INM-ACC-004",
    name: "Brass Hex Standoff & Screw Kit (120 Pieces)",
    slug: "brass-hex-standoff-screw-kit",
    category: "Accessories",
    price: 299,
    availability: "In Stock",
    image: "images/2.jpg",
    short_description: "Assorted M3 brass male-female spacers, hex nuts, and stainless steel machine screws.",
    detailed_description: "High quality M3 brass hardware kit for stacking circuit boards, mounting sensors, and building multi-deck robot chassis structures.",
    specifications: {
      "Thread Size": "M3 (3mm Standard Metric)",
      "Lengths": "6mm, 10mm, 15mm, 20mm Standoffs",
      "Material": "Solid Brass & Stainless Steel"
    },
    whats_included: ["1x Compartment Storage Box", "60x Brass Standoffs", "30x M3 Screws", "30x M3 Hex Nuts"],
    ideal_for: ["Multi-story chassis building", "PCB board mounting"],
    compatibility: "Fits all standard Arduino & Pi mounting holes.",
    recommended_accessories: ["prod-ele-01"]
  },
  {
    id: "prod-acc-05",
    sku: "INM-ACC-005",
    name: "Mini Solar Panel 5V 100mA for Educational Experiments",
    slug: "mini-solar-panel-5v-100ma",
    category: "Accessories",
    price: 145,
    availability: "In Stock",
    image: "images/3.jpg",
    short_description: "Polycrystalline solar cell module for clean energy STEM workshops and battery charging.",
    detailed_description: "Encapsulated mini solar panel delivering 5V output under direct sunlight. Great for teaching photovoltaic physics and renewable energy conversion.",
    specifications: {
      "Peak Output": "5V DC @ 100mA (0.5 Watt)",
      "Panel Type": "Polycrystalline Silicon",
      "Dimensions": "70mm x 55mm"
    },
    whats_included: ["1x 5V Solar Panel Module with Soldered Wires"],
    ideal_for: ["Green energy STEM projects", "Solar powered robots"],
    compatibility: "Pairs with rechargeable NiMH/Li-ion charging circuits.",
    recommended_accessories: ["prod-ele-08"]
  },
  {
    id: "prod-acc-06",
    sku: "INM-ACC-006",
    name: "Heavy-Duty Alligator Clip Test Leads (Set of 10)",
    slug: "alligator-clip-test-leads-10pack",
    category: "Accessories",
    price: 130,
    availability: "In Stock",
    image: "images/4.jpg",
    short_description: "Color-coded 50cm jumper cables with insulated alligator clamps on both ends.",
    detailed_description: "Quick temporary circuit connections without soldering or breadboarding. High spring tension insulated clips for testing components.",
    specifications: {
      "Cable Length": "50cm",
      "Quantity": "10 Wires (5 Colors x 2)",
      "Clip Insulation": "Vinyl Boots"
    },
    whats_included: ["10x Alligator Clip Cables"],
    ideal_for: ["Physics experiment setups", "Quick testing"],
    compatibility: "Universal battery and component clip testing.",
    recommended_accessories: ["prod-ele-08"]
  }
];

if (typeof window !== "undefined") {
  window.PRODUCTS_DATA = PRODUCTS_DATA;
}
