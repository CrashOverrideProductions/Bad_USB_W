# BadUSB-W Firmware <img align="right" src="https://github.com/CrashOverrideProductions/Bad_USB_W/blob/main/images/logo.jpg?raw=true">

### Project: PlatformIO Migration of BadUSB-W Firmware (WiFi Duck Modified) <img alt="" align="right" src="https://img.shields.io/badge/Status-Code%20Review-informational?style=flat&logoColor=white&color=0EF9421" />

<img src="https://cdn.platformio.org/images/platformio-logo.17fdc3bc.png">

#### NOTE: THIS FIRMWARE IS CURRENTLY BEING MODIFIED FOR USE ON AN ESP32

#### ChangeLog
```c++
// PlatformIO Migration
22/05/2021  IMPORT SpacehuhnTech/WiFiDuck
22/05/2021  MIGRATE ESP_DUCK TO PLATFORMIO
22/05/2021  MIGRATE ATMEGA_DUCK TO PLATFORMIO

// ESP32 Migration
Date        File          Changes
==========  ============  ===================================================================
01/07/2021    cli.cpp     Comment out xtern "C" functions
01/07/2021    config.h    Enable Debugging
                          Enable I2C & Set Pin SDA-21/SCL-22
                          Change WiFi Settings (See WiFi Setting Below)
                          Change Sanity Check to from ESP8266 to ESP32
01/07/2021                Manually Add Libraries "EEPROM" & "SPIFFS"
01/07/2021   eeprom.h     Change #include "<EEPROM.h>" to "#include "Libraries/EEPROM.h" "
01/07/2021   spiffs.cpp   



```

#### Platform IO Build Status
##### ATMEGA_DUCK
```c++
Processing leonardo (platform: atmelavr; board: leonardo; framework: arduino)
------------------------------------------------------------------------------------------
Verbose mode can be enabled via `-v, --verbose` option
CONFIGURATION: https://docs.platformio.org/page/boards/atmelavr/leonardo.html
PLATFORM: Atmel AVR (3.3.0) > Arduino Leonardo    
HARDWARE: ATMEGA32U4 16MHz, 2.50KB RAM, 28KB Flash
DEBUG: Current (simavr) On-board (simavr)
PACKAGES:
 - framework-arduino-avr 5.1.0
 - toolchain-atmelavr 1.70300.191015 (7.3.0)      
LDF: Library Dependency Finder -> http://bit.ly/configure-pio-ldf
LDF Modes: Finder ~ chain, Compatibility ~ soft
Found 5 compatible libraries
Scanning dependencies...
Dependency Graph
|-- <SPI> 1.0 
|-- <Wire> 1.0
|-- <HID> 1.0 
Building in release mode
Compiling .pio\build\leonardo\src\Adafruit_DotStar.cpp.o
Compiling .pio\build\leonardo\src\NeoPixel.cpp.o
Compiling .pio\build\leonardo\src\atmega_duck.cpp.o
Compiling .pio\build\leonardo\src\com.cpp.o
Compiling .pio\build\leonardo\src\duckparser.cpp.o
Compiling .pio\build\leonardo\src\keyboard.cpp.o
Compiling .pio\build\leonardo\src\led.cpp.o
Compiling .pio\build\leonardo\src\parser.c.o
Compiling .pio\build\leonardo\FrameworkArduino\HardwareSerial.cpp.o
Compiling .pio\build\leonardo\FrameworkArduino\HardwareSerial0.cpp.o
Compiling .pio\build\leonardo\FrameworkArduino\HardwareSerial1.cpp.o
Archiving .pio\build\leonardo\lib675\libSPI.a
Compiling .pio\build\leonardo\FrameworkArduino\HardwareSerial2.cpp.o
Archiving .pio\build\leonardo\libdea\libWire.a
Archiving .pio\build\leonardo\lib370\libHID.a
Compiling .pio\build\leonardo\FrameworkArduino\HardwareSerial3.cpp.o
Compiling .pio\build\leonardo\FrameworkArduino\IPAddress.cpp.o
Compiling .pio\build\leonardo\FrameworkArduino\PluggableUSB.cpp.o
Compiling .pio\build\leonardo\FrameworkArduino\Print.cpp.o
Compiling .pio\build\leonardo\FrameworkArduino\Stream.cpp.o
Compiling .pio\build\leonardo\FrameworkArduino\Tone.cpp.o
Compiling .pio\build\leonardo\FrameworkArduino\USBCore.cpp.o
Compiling .pio\build\leonardo\FrameworkArduino\WInterrupts.c.o
Compiling .pio\build\leonardo\FrameworkArduino\WMath.cpp.o
Compiling .pio\build\leonardo\FrameworkArduino\WString.cpp.o
Compiling .pio\build\leonardo\FrameworkArduino\abi.cpp.o
Compiling .pio\build\leonardo\FrameworkArduino\hooks.c.o
Compiling .pio\build\leonardo\FrameworkArduino\main.cpp.o
Compiling .pio\build\leonardo\FrameworkArduino\new.cpp.o
Compiling .pio\build\leonardo\FrameworkArduino\wiring.c.o
Compiling .pio\build\leonardo\FrameworkArduino\wiring_analog.c.o
Compiling .pio\build\leonardo\FrameworkArduino\wiring_digital.c.o
Compiling .pio\build\leonardo\FrameworkArduino\wiring_pulse.S.o
Compiling .pio\build\leonardo\FrameworkArduino\wiring_pulse.c.o
Compiling .pio\build\leonardo\FrameworkArduino\wiring_shift.c.o
Archiving .pio\build\leonardo\libFrameworkArduino.a
Linking .pio\build\leonardo\firmware.elf
Checking size .pio\build\leonardo\firmware.elf
Advanced Memory Usage is available via "PlatformIO Home > Project Inspect"
RAM:   [======    ]  63.7% (used 1630 bytes from 2560 bytes)
Flash: [=====     ]  50.6% (used 14500 bytes from 28672 bytes)
Building .pio\build\leonardo\firmware.hex
=========================== [SUCCESS] Took 7.83 seconds ==================================
```

##### ESP_DUCK
```c++

Processing esp32doit-devkit-v1 (platform: espressif32; board: esp32doit-devkit-v1; framework: arduino)
-----------------------------------------------------------------------------------------------------------------Verbose mode can be enabled via `-v, --verbose` option
CONFIGURATION: https://docs.platformio.org/page/boards/espressif32/esp32doit-devkit-v1.html
PLATFORM: Espressif 32 (3.2.1) > DOIT ESP32 DEVKIT V1
HARDWARE: ESP32 240MHz, 320KB RAM, 4MB Flash
DEBUG: Current (esp-prog) External (esp-prog, iot-bus-jtag, jlink, minimodule, olimex-arm-usb-ocd, olimex-arm-usb-ocd-h, olimex-arm-usb-tiny-h, olimex-jtag-tiny, tumpa)
PACKAGES:
 - framework-arduinoespressif32 3.10006.210326 (1.0.6)
 - tool-esptoolpy 1.30000.201119 (3.0.0)
 - toolchain-xtensa32 2.50200.97 (5.2.0)
LDF: Library Dependency Finder -> http://bit.ly/configure-pio-ldf
LDF Modes: Finder ~ chain, Compatibility ~ soft
Found 31 compatible libraries
Scanning dependencies...
Dependency Graph
|-- <SimpleCLI> 1.1.1
|-- <ESP Async WebServer> 1.2.3
|   |-- <AsyncTCP> 1.1.1       
|   |-- <FS> 1.0
|   |-- <WiFi> 1.0
|-- <Wire> 1.0.1
|-- <ArduinoOTA> 1.0
|   |-- <Update> 1.0
|   |-- <WiFi> 1.0
|   |-- <ESPmDNS> 1.0
|   |   |-- <WiFi> 1.0
|-- <AsyncTCP> 1.1.1
|-- <DNSServer> 1.1.0
|   |-- <WiFi> 1.0
|-- <ESPmDNS> 1.0
|   |-- <WiFi> 1.0
|-- <WiFi> 1.0
Building in release mode
Compiling .pio\build\esp32doit-devkit-v1\src\Libraries\EEPROM.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\src\Libraries\FS.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\src\Libraries\SPIFFS.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\src\Libraries\vfs_api.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\src\cli.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\src\com.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\src\duckscript.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\src\eeprom.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\src\esp_duck.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\src\settings.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\src\spiffs.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\src\webserver.cpp.o
Generating partitions .pio\build\esp32doit-devkit-v1\partitions.bin
Compiling .pio\build\esp32doit-devkit-v1\lib176\SimpleCLI\Argument.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\lib176\SimpleCLI\Command.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\lib176\SimpleCLI\CommandError.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\lib176\SimpleCLI\SimpleCLI.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\lib176\SimpleCLI\c\arg.c.o
Compiling .pio\build\esp32doit-devkit-v1\lib176\SimpleCLI\c\cmd.c.o
Compiling .pio\build\esp32doit-devkit-v1\lib176\SimpleCLI\c\cmd_error.c.o
Compiling .pio\build\esp32doit-devkit-v1\lib176\SimpleCLI\c\comparator.c.o
Compiling .pio\build\esp32doit-devkit-v1\lib176\SimpleCLI\c\parser.c.o
Compiling .pio\build\esp32doit-devkit-v1\libb5f\AsyncTCP\AsyncTCP.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\libb9a\FS\FS.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\libb9a\FS\vfs_api.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\libb1c\WiFi\ETH.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\libb1c\WiFi\WiFi.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\libb1c\WiFi\WiFiAP.cpp.o
Archiving .pio\build\esp32doit-devkit-v1\lib176\libSimpleCLI.a
Compiling .pio\build\esp32doit-devkit-v1\libb1c\WiFi\WiFiClient.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\libb1c\WiFi\WiFiGeneric.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\libb1c\WiFi\WiFiMulti.cpp.o
Archiving .pio\build\esp32doit-devkit-v1\libb9a\libFS.a
Compiling .pio\build\esp32doit-devkit-v1\libb1c\WiFi\WiFiSTA.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\libb1c\WiFi\WiFiScan.cpp.o
Archiving .pio\build\esp32doit-devkit-v1\libb5f\libAsyncTCP.a
Compiling .pio\build\esp32doit-devkit-v1\libb1c\WiFi\WiFiServer.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\libb1c\WiFi\WiFiUdp.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\lib632\ESP Async WebServer\AsyncEventSource.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\lib632\ESP Async WebServer\AsyncWebSocket.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\lib632\ESP Async WebServer\SPIFFSEditor.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\lib632\ESP Async WebServer\WebAuthentication.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\lib632\ESP Async WebServer\WebHandlers.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\lib632\ESP Async WebServer\WebRequest.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\lib632\ESP Async WebServer\WebResponses.cpp.o
Archiving .pio\build\esp32doit-devkit-v1\libb1c\libWiFi.a
Compiling .pio\build\esp32doit-devkit-v1\lib632\ESP Async WebServer\WebServer.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\lib068\Wire\Wire.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\lib178\Update\HttpsOTAUpdate.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\lib178\Update\Updater.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\libcf5\ESPmDNS\ESPmDNS.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\liba79\ArduinoOTA\ArduinoOTA.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\libd96\DNSServer\DNSServer.cpp.o
Archiving .pio\build\esp32doit-devkit-v1\libFrameworkArduinoVariant.a
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\Esp.cpp.o
Archiving .pio\build\esp32doit-devkit-v1\lib068\libWire.a
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\FunctionalInterrupt.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\HardwareSerial.cpp.o
Archiving .pio\build\esp32doit-devkit-v1\lib178\libUpdate.a
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\IPAddress.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\IPv6Address.cpp.o
Archiving .pio\build\esp32doit-devkit-v1\libcf5\libESPmDNS.a
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\MD5Builder.cpp.o
Archiving .pio\build\esp32doit-devkit-v1\liba79\libArduinoOTA.a
Archiving .pio\build\esp32doit-devkit-v1\libd96\libDNSServer.a
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\Print.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\Stream.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\StreamString.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\WMath.cpp.o
Archiving .pio\build\esp32doit-devkit-v1\lib632\libESP Async WebServer.a
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\WString.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\base64.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\cbuf.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-adc.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-bt.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-cpu.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-dac.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-gpio.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-i2c.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-ledc.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-log.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-matrix.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-misc.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-psram.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-rmt.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-sigmadelta.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-spi.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-time.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-timer.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-touch.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\esp32-hal-uart.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\libb64\cdecode.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\libb64\cencode.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\main.cpp.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\stdlib_noniso.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\wiring_pulse.c.o
Compiling .pio\build\esp32doit-devkit-v1\FrameworkArduino\wiring_shift.c.o
Archiving .pio\build\esp32doit-devkit-v1\libFrameworkArduino.a
Linking .pio\build\esp32doit-devkit-v1\firmware.elf
Retrieving maximum program size .pio\build\esp32doit-devkit-v1\firmware.elf
Checking size .pio\build\esp32doit-devkit-v1\firmware.elf
Advanced Memory Usage is available via "PlatformIO Home > Project Inspect"
RAM:   [=         ]  14.9% (used 48828 bytes from 327680 bytes)
Flash: [========= ]  85.3% (used 1117514 bytes from 1310720 bytes)
Building .pio\build\esp32doit-devkit-v1\firmware.bin
esptool.py v3.0
================================================================================================================
                                        [SUCCESS] Took 48.71 seconds 
================================================================================================================
```



<!-- Licencing Always at the Bottom -->
------------
### Licencing <img alt="" align="right" src="https://img.shields.io/badge/Licence-MIT-informational?style=flat&logoColor=white&color=FF9421" />

**MIT - LICENCE**
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: 
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 

* IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
