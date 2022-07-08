
#include "Arduino.h"
#include "HCSR04Esp32.h"
UltraSonicDistanceSensor::UltraSonicDistanceSensor(uint8_t PIN1, uint8_t PIN2) {
   
    this->triggerPin = PIN1;
    this->echoPin = PIN2;
    pinMode(triggerPin, OUTPUT);
    pinMode(echoPin, INPUT);
}

double UltraSonicDistanceSensor::measureDistanceCm() {
    double distanceCm = measureDistance()/ 2.0 * 0.0343;
    if (distanceCm == 0 || distanceCm > 888) {
        return 888 ;
    } else {
        return distanceCm;
    }
}
double UltraSonicDistanceSensor::measureDistanceinch() {
    double distanceCm = measureDistance()/ 2.0 * 0.0343/2.54;
    if (distanceCm == 0 || distanceCm > 188) {
        return 188 ;
    } else {
        return distanceCm;
    }
}
long UltraSonicDistanceSensor::measureDistance() {
    digitalWrite(triggerPin, LOW);
    delayMicroseconds(2);
    // Hold trigger for 10 microseconds, which is signal for sensor to measure distance.
    digitalWrite(triggerPin, HIGH);
    delayMicroseconds(10);
    digitalWrite(triggerPin, LOW);
    // Measure the length of echo signal, which is equal to the time needed for sound to go there and back.
    unsigned long durationMicroSec = pulseIn(echoPin, HIGH);
    return durationMicroSec;

}