import { appendLogLine, readLogFile, writeLogLine } from "./logger.mjs";

writeLogLine("log.txt", "test line\n");
readLogFile("log.txt");
appendLogLine("log.txt", "second line\n");
readLogFile("log.txt");