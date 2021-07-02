# BadUSB-W Firmware <img align="right" src="https://github.com/CrashOverrideProductions/Tools/blob/main/Bad%20USB/images/logo.jpg?raw=true">

### Project: PlatformIO Migration of BadUSB-W Firmware (WiFi Duck Modified) <img alt="" align="right" src="https://img.shields.io/badge/Status-Code%20Review-informational?style=flat&logoColor=white&color=0EF9421" />

<img src="https://cdn.platformio.org/images/platformio-logo.17fdc3bc.png">

#### ChangeLog
```c++
22/05/2021  IMPORT SpacehuhnTech/WiFiDuck
22/05/2021  MIGRATE ESP_DUCK TO PLATFORMIO
22/05/2021  MIGRATE ATMEGA_DUCK TO PLATFORMIO
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
Processing esp_wroom_02 (platform: espressif8266; board: esp_wroom_02; framework: arduino)
------------------------------------------------------------------------------------------
Verbose mode can be enabled via `-v, --verbose` option
CONFIGURATION: https://docs.platformio.org/page/boards/espressif8266/esp_wroom_02.html
PLATFORM: Espressif 8266 (2.6.3) > ESP-WROOM-02
HARDWARE: ESP8266 80MHz, 80KB RAM, 2MB Flash
PACKAGES:
 - framework-arduinoespressif8266 3.20704.0 (2.7.4)
 - tool-esptool 1.413.0 (4.13)
 - tool-esptoolpy 1.30000.201119 (3.0.0)
 - toolchain-xtensa 2.40802.200502 (4.8.2)
LDF: Library Dependency Finder -> http://bit.ly/configure-pio-ldf
LDF Modes: Finder ~ chain, Compatibility ~ soft
Found 32 compatible libraries
Scanning dependencies...
Dependency Graph
|-- <ESP Async WebServer> 1.2.3
|   |-- <ESPAsyncTCP> 1.2.2
|   |   |-- <ESP8266WiFi> 1.0
|   |-- <Hash> 1.0
|   |-- <ESP8266WiFi> 1.0
|-- <ESPAsyncTCP> 1.2.2
|   |-- <ESP8266WiFi> 1.0
|-- <SimpleCLI> 1.1.1
|-- <EEPROM> 1.0
|-- <Wire> 1.0
|-- <ArduinoOTA> 1.0
|   |-- <ESP8266WiFi> 1.0
|   |-- <ESP8266mDNS> 1.2
|   |   |-- <ESP8266WiFi> 1.0
|-- <DNSServer> 1.1.1
|   |-- <ESP8266WiFi> 1.0
|-- <ESP8266mDNS> 1.2
|   |-- <ESP8266WiFi> 1.0
|-- <ESP8266WiFi> 1.0
Building in release mode
Compiling .pio\build\esp_wroom_02\src\EEPROM\EEPROM.cpp.o
Compiling .pio\build\esp_wroom_02\src\cli.cpp.o
Compiling .pio\build\esp_wroom_02\src\com.cpp.o
Compiling .pio\build\esp_wroom_02\src\duckscript.cpp.o
Compiling .pio\build\esp_wroom_02\src\eeprom.cpp.o
Compiling .pio\build\esp_wroom_02\src\esp_duck.cpp.o
Compiling .pio\build\esp_wroom_02\src\settings.cpp.o
Compiling .pio\build\esp_wroom_02\src\spiffs.cpp.o
Compiling .pio\build\esp_wroom_02\src\webserver.cpp.o
Generating LD script .pio\build\esp_wroom_02\ld\local.eagle.app.v6.common.ld
In file included from src\duckscript.h:8:0,
                 from src\duckscript.cpp:6:
Compiling .pio\build\esp_wroom_02\lib5a1\ESP8266WiFi\ESP8266WiFi.cpp.o
Compiling .pio\build\esp_wroom_02\lib5a1\ESP8266WiFi\ESP8266WiFiAP.cpp.o
Compiling .pio\build\esp_wroom_02\lib5a1\ESP8266WiFi\ESP8266WiFiGratuitous.cpp.o
Compiling .pio\build\esp_wroom_02\lib5a1\ESP8266WiFi\ESP8266WiFiMulti.cpp.o
Compiling .pio\build\esp_wroom_02\lib5a1\ESP8266WiFi\ESP8266WiFiSTA-WPS.cpp.o
Compiling .pio\build\esp_wroom_02\lib5a1\ESP8266WiFi\ESP8266WiFiSTA.cpp.o
Compiling .pio\build\esp_wroom_02\lib5a1\ESP8266WiFi\ESP8266WiFiScan.cpp.o
Compiling .pio\build\esp_wroom_02\lib5a1\ESP8266WiFi\WiFiClient.cpp.o
Compiling .pio\build\esp_wroom_02\lib5a1\ESP8266WiFi\WiFiClientSecureAxTLS.cpp.o
Compiling .pio\build\esp_wroom_02\lib5a1\ESP8266WiFi\WiFiClientSecureBearSSL.cpp.o
Compiling .pio\build\esp_wroom_02\lib5a1\ESP8266WiFi\WiFiServer.cpp.o
Compiling .pio\build\esp_wroom_02\lib5a1\ESP8266WiFi\WiFiServerSecureAxTLS.cpp.o
Compiling .pio\build\esp_wroom_02\lib5a1\ESP8266WiFi\WiFiServerSecureBearSSL.cpp.o
Compiling .pio\build\esp_wroom_02\lib5a1\ESP8266WiFi\WiFiUdp.cpp.o
Compiling .pio\build\esp_wroom_02\libcb0\ESPAsyncTCP\AsyncPrinter.cpp.o
Compiling .pio\build\esp_wroom_02\libcb0\ESPAsyncTCP\ESPAsyncTCP.cpp.o
Compiling .pio\build\esp_wroom_02\libcb0\ESPAsyncTCP\ESPAsyncTCPbuffer.cpp.o
Compiling .pio\build\esp_wroom_02\libcb0\ESPAsyncTCP\SyncClient.cpp.o
Compiling .pio\build\esp_wroom_02\libcb0\ESPAsyncTCP\tcp_axtls.c.o
Compiling .pio\build\esp_wroom_02\lib814\Hash\Hash.cpp.o
Compiling .pio\build\esp_wroom_02\libc79\ESP Async WebServer\AsyncEventSource.cpp.o
Compiling .pio\build\esp_wroom_02\libc79\ESP Async WebServer\AsyncWebSocket.cpp.o
Archiving .pio\build\esp_wroom_02\lib5a1\libESP8266WiFi.a
Compiling .pio\build\esp_wroom_02\libc79\ESP Async WebServer\SPIFFSEditor.cpp.o
Compiling .pio\build\esp_wroom_02\libc79\ESP Async WebServer\WebAuthentication.cpp.o
Compiling .pio\build\esp_wroom_02\libc79\ESP Async WebServer\WebHandlers.cpp.o
Archiving .pio\build\esp_wroom_02\lib814\libHash.a
Compiling .pio\build\esp_wroom_02\libc79\ESP Async WebServer\WebRequest.cpp.o
Compiling .pio\build\esp_wroom_02\libc79\ESP Async WebServer\WebResponses.cpp.o
Archiving .pio\build\esp_wroom_02\libcb0\libESPAsyncTCP.a
Compiling .pio\build\esp_wroom_02\libc79\ESP Async WebServer\WebServer.cpp.o
Compiling .pio\build\esp_wroom_02\lib40a\SimpleCLI\Argument.cpp.o
Compiling .pio\build\esp_wroom_02\lib40a\SimpleCLI\Command.cpp.o
Compiling .pio\build\esp_wroom_02\lib40a\SimpleCLI\CommandError.cpp.o
Compiling .pio\build\esp_wroom_02\lib40a\SimpleCLI\SimpleCLI.cpp.o
Compiling .pio\build\esp_wroom_02\lib40a\SimpleCLI\c\arg.c.o
Compiling .pio\build\esp_wroom_02\lib40a\SimpleCLI\c\cmd.c.o
Compiling .pio\build\esp_wroom_02\lib40a\SimpleCLI\c\cmd_error.c.o
Compiling .pio\build\esp_wroom_02\lib40a\SimpleCLI\c\comparator.c.o
Compiling .pio\build\esp_wroom_02\lib40a\SimpleCLI\c\parser.c.o
Compiling .pio\build\esp_wroom_02\libe6e\EEPROM\EEPROM.cpp.o
Compiling .pio\build\esp_wroom_02\lib330\Wire\Wire.cpp.o
Compiling .pio\build\esp_wroom_02\lib2de\ESP8266mDNS\ESP8266mDNS.cpp.o
Compiling .pio\build\esp_wroom_02\lib2de\ESP8266mDNS\ESP8266mDNS_Legacy.cpp.o
Compiling .pio\build\esp_wroom_02\lib2de\ESP8266mDNS\LEAmDNS.cpp.o
Archiving .pio\build\esp_wroom_02\lib40a\libSimpleCLI.a
Compiling .pio\build\esp_wroom_02\lib2de\ESP8266mDNS\LEAmDNS_Control.cpp.o
Archiving .pio\build\esp_wroom_02\libc79\libESP Async WebServer.a
Compiling .pio\build\esp_wroom_02\lib2de\ESP8266mDNS\LEAmDNS_Helpers.cpp.o
Compiling .pio\build\esp_wroom_02\lib2de\ESP8266mDNS\LEAmDNS_Structs.cpp.o
Archiving .pio\build\esp_wroom_02\libe6e\libEEPROM.a
Compiling .pio\build\esp_wroom_02\lib2de\ESP8266mDNS\LEAmDNS_Transfer.cpp.o
Archiving .pio\build\esp_wroom_02\lib330\libWire.a
Compiling .pio\build\esp_wroom_02\lib15e\ArduinoOTA\ArduinoOTA.cpp.o
Compiling .pio\build\esp_wroom_02\lib35f\DNSServer\DNSServer.cpp.o
Archiving .pio\build\esp_wroom_02\libFrameworkArduinoVariant.a
Compiling .pio\build\esp_wroom_02\FrameworkArduino\Crypto.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\Esp-frag.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\Esp-version.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\Esp.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\FS.cpp.o
Archiving .pio\build\esp_wroom_02\lib35f\libDNSServer.a
Compiling .pio\build\esp_wroom_02\FrameworkArduino\FSnoop.cpp.o
Archiving .pio\build\esp_wroom_02\lib2de\libESP8266mDNS.a
Compiling .pio\build\esp_wroom_02\FrameworkArduino\FunctionalInterrupt.cpp.o
Archiving .pio\build\esp_wroom_02\lib15e\libArduinoOTA.a
Compiling .pio\build\esp_wroom_02\FrameworkArduino\HardwareSerial.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\IPAddress.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\MD5Builder.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\Print.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\Schedule.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\StackThunk.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\Stream.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\StreamString.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\Tone.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\TypeConversion.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\Updater.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\WMath.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\WString.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\abi.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\base64.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\cbuf.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\cont.S.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\cont_util.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_app_entry_noextra4k.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_eboot_command.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_features.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_flash_quirks.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_flash_utils.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_i2s.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_main.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_noniso.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_phy.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_postmortem.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_si2c.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_sigma_delta.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_spi_utils.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_timer.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_waveform.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_wiring.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_wiring_analog.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_wiring_digital.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_wiring_pulse.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_wiring_pwm.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\core_esp8266_wiring_shift.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\crc32.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\debug.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\flash_hal.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\gdb_hooks.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\heap.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\libb64\cdecode.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\libb64\cencode.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\libc_replacements.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\sntp-lwip2.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\spiffs\spiffs_cache.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\spiffs\spiffs_check.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\spiffs\spiffs_gc.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\spiffs\spiffs_hydrogen.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\spiffs\spiffs_nucleus.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\spiffs_api.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\sqrt32.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\time.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\uart.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\umm_malloc\umm_info.c.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\umm_malloc\umm_integrity.c.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\umm_malloc\umm_local.c.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\umm_malloc\umm_malloc.cpp.o
Compiling .pio\build\esp_wroom_02\FrameworkArduino\umm_malloc\umm_poison.c.o
Archiving .pio\build\esp_wroom_02\libFrameworkArduino.a
Linking .pio\build\esp_wroom_02\firmware.elf
Retrieving maximum program size .pio\build\esp_wroom_02\firmware.elf
Checking size .pio\build\esp_wroom_02\firmware.elf
Building .pio\build\esp_wroom_02\firmware.bin
Creating BIN file ".pio\build\esp_wroom_02\firmware.bin" using "C:\Users\Justin\.
  platformio\packages\framework-arduinoespressif8266\bootloaders\eboot\eboot.elf" 
    and ".pio\build\esp_wroom_02\firmware.elf"
Advanced Memory Usage is available via "PlatformIO Home > Project Inspect"
RAM:   [=====     ]  46.6% (used 38176 bytes from 81920 bytes)
Flash: [=====     ]  50.6% (used 528800 bytes from 1044464 bytes)
============================= [SUCCESS] Took 30.37 seconds ===============================
```



<!-- Licencing Always at the Bottom -->
------------
### Licencing <img alt="" align="right" src="https://img.shields.io/badge/Licence-MIT-informational?style=flat&logoColor=white&color=FF9421" />

**MIT - LICENCE**
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: 
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 

* IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
