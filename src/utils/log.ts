/** TODO convert to log4javascript? http://log4javascript.org/ */
export class Log {
  public static readonly NONE: number = 0; //NONE (no log messages, even fatal)
  public static readonly FATL: number = 1; //FATAL
  public static readonly ERRR: number = 2; //ERROR
  public static readonly WARN: number = 3; //WARN
  public static readonly INFO: number = 4; //INFO
  public static readonly DBG1: number = 5; //DEBUG1
  public static readonly DBG2: number = 6; //DEBUG2
  public static readonly TRAC: number = 7; //TRACE

  private static level: number = Log.TRAC;

  constructor() {
    Log.trac("HELLO! UTIL LOG (LogLevel="+Log.level+")", "constructor", "Log");
  }

  static setLogLevel(newLogLvl): boolean {
    if(newLogLvl < Log.NONE || newLogLvl > Log.TRAC) {
      Log.errr("Unable to set log level, range should be in range "+Log.NONE+"-"+Log.TRAC, "setLogLevel", "Log");
      return true;
    }
    Log.level = newLogLvl;
    return false;
  }

  static getLogLevel(): number { return Log.level;    }
  static q(quote):      string { return '"'+quote+'"' }

  static fatl(msg, methodName=null, className=null): void {
    if(Log.level > Log.NONE) {
      if(methodName == null) { console.error("FATAL: "+msg);                               }
      else                   { console.error("FATAL: "+className+"."+methodName+": "+msg); }
    }
  }
  static errr(msg, methodName=null, className=null): void {
    if(Log.level > Log.FATL) {
      if(methodName == null) { console.error("ERROR: "+msg);                               }
      else                   { console.error("ERROR: "+className+"."+methodName+": "+msg); }
    }
  }
  static warn(msg, methodName=null, className=null): void {
    if(Log.level > Log.ERRR) {
      if(methodName == null) { console.warn("WARN: "+msg);                               }
      else                   { console.warn("WARN: "+className+"."+methodName+": "+msg); }
    }
  }
  static info(msg, methodName=null, className=null): void {
    if(Log.level > Log.WARN) {
      if(methodName == null) { console.info("INF0: "+msg);                               }
      else                   { console.info("INF0: "+className+"."+methodName+": "+msg); }
    }
  }
  static dbg1(msg, methodName=null, className=null): void {
    if(Log.level > Log.INFO) {
      if(methodName == null) { console.debug("DBG1: "+msg);                               }
      else                   { console.debug("DBG1: "+className+"."+methodName+": "+msg); }
    }
  }
  static dbg2(msg, methodName=null, className=null): void {
    if(Log.level > Log.DBG1) {
      if(methodName == null) { console.debug("DBG2: "+msg);                               }
      else                   { console.debug("DBG2: "+className+"."+methodName+": "+msg); }
    }
  }
  static trac(msg, methodName=null, className=null): void {
    if(Log.level > Log.DBG2) {
      if(methodName == null) { console.log("TRACE: "+msg);                               }
      else                   { console.log("TRACE: "+className+"."+methodName+": "+msg); }
    }
  }
}