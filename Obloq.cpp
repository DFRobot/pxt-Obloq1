#include "pxt.h"
using namespace pxt;
namespace Obloq {

    //%
    void obloqSetTxBufferSize(int size){
        if(size > 100) {
            size = 100;
        }
        uBit.serial.setTxBufferSize(size);
    }

    //%
    void obloqSetRxBufferSize(int size){
        if(size > 100) {
            size = 100;
        }
        uBit.serial.setRxBufferSize(size);
    }

    //%
    void obloqEventOn(){
        uBit.serial.eventOn(ManagedString('\r'), MicroBitSerialMode::ASYNC);
    }

    //%
    void obloqClearRxBuffer(){
        uBit.serial.clearRxBuffer();
    }

    //%
    void obloqClearTxBuffer(){
        uBit.serial.clearTxBuffer();
    }

    //%    
    void forever_stubs(void *a) {
        runAction0((Action)a);
    }

    //%
    void obloqforevers(Action a) {
      if (a != 0) {
        incr(a);
        create_fiber(forever_stubs, (void*)a);
      }
    }

    //%
    void obloqWriteString(StringData *text) {
      if (!text) {
          return;
      }
      uBit.serial.send(ManagedString(text));
    }
}
