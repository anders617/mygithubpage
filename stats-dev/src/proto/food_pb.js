/* eslint-disable */
// source: proto/food.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_menu_pb = require('../proto/menu_pb.js');
goog.object.extend(proto, proto_menu_pb);
goog.exportSymbol('proto.mdining.Food', null, global);
goog.exportSymbol('proto.mdining.FoodDiningHallMatch', null, global);
goog.exportSymbol('proto.mdining.MealTime', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mdining.Food = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mdining.Food.repeatedFields_, null);
};
goog.inherits(proto.mdining.Food, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mdining.Food.displayName = 'proto.mdining.Food';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mdining.FoodDiningHallMatch = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mdining.FoodDiningHallMatch, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mdining.FoodDiningHallMatch.displayName = 'proto.mdining.FoodDiningHallMatch';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mdining.MealTime = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mdining.MealTime.repeatedFields_, null);
};
goog.inherits(proto.mdining.MealTime, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mdining.MealTime.displayName = 'proto.mdining.MealTime';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mdining.Food.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mdining.Food.prototype.toObject = function(opt_includeInstance) {
  return proto.mdining.Food.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mdining.Food} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mdining.Food.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    date: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    categoryList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    menuitem: (f = msg.getMenuitem()) && proto_menu_pb.MenuItem.toObject(includeInstance, f),
    dininghallmatchMap: (f = msg.getDininghallmatchMap()) ? f.toObject(includeInstance, proto.mdining.FoodDiningHallMatch.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mdining.Food}
 */
proto.mdining.Food.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mdining.Food;
  return proto.mdining.Food.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mdining.Food} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mdining.Food}
 */
proto.mdining.Food.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addCategory(value);
      break;
    case 5:
      var value = new proto_menu_pb.MenuItem;
      reader.readMessage(value,proto_menu_pb.MenuItem.deserializeBinaryFromReader);
      msg.setMenuitem(value);
      break;
    case 6:
      var value = msg.getDininghallmatchMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.mdining.FoodDiningHallMatch.deserializeBinaryFromReader, "", new proto.mdining.FoodDiningHallMatch());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mdining.Food.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mdining.Food.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mdining.Food} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mdining.Food.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCategoryList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getMenuitem();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_menu_pb.MenuItem.serializeBinaryToWriter
    );
  }
  f = message.getDininghallmatchMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.mdining.FoodDiningHallMatch.serializeBinaryToWriter);
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.mdining.Food.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mdining.Food} returns this
 */
proto.mdining.Food.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string date = 2;
 * @return {string}
 */
proto.mdining.Food.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mdining.Food} returns this
 */
proto.mdining.Food.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.mdining.Food.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mdining.Food} returns this
 */
proto.mdining.Food.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string category = 4;
 * @return {!Array<string>}
 */
proto.mdining.Food.prototype.getCategoryList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.mdining.Food} returns this
 */
proto.mdining.Food.prototype.setCategoryList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.mdining.Food} returns this
 */
proto.mdining.Food.prototype.addCategory = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mdining.Food} returns this
 */
proto.mdining.Food.prototype.clearCategoryList = function() {
  return this.setCategoryList([]);
};


/**
 * optional MenuItem menuItem = 5;
 * @return {?proto.mdining.MenuItem}
 */
proto.mdining.Food.prototype.getMenuitem = function() {
  return /** @type{?proto.mdining.MenuItem} */ (
    jspb.Message.getWrapperField(this, proto_menu_pb.MenuItem, 5));
};


/**
 * @param {?proto.mdining.MenuItem|undefined} value
 * @return {!proto.mdining.Food} returns this
*/
proto.mdining.Food.prototype.setMenuitem = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mdining.Food} returns this
 */
proto.mdining.Food.prototype.clearMenuitem = function() {
  return this.setMenuitem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mdining.Food.prototype.hasMenuitem = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * map<string, FoodDiningHallMatch> diningHallMatch = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.mdining.FoodDiningHallMatch>}
 */
proto.mdining.Food.prototype.getDininghallmatchMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.mdining.FoodDiningHallMatch>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      proto.mdining.FoodDiningHallMatch));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.mdining.Food} returns this
 */
proto.mdining.Food.prototype.clearDininghallmatchMap = function() {
  this.getDininghallmatchMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mdining.FoodDiningHallMatch.prototype.toObject = function(opt_includeInstance) {
  return proto.mdining.FoodDiningHallMatch.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mdining.FoodDiningHallMatch} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mdining.FoodDiningHallMatch.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mealtimeMap: (f = msg.getMealtimeMap()) ? f.toObject(includeInstance, proto.mdining.MealTime.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mdining.FoodDiningHallMatch}
 */
proto.mdining.FoodDiningHallMatch.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mdining.FoodDiningHallMatch;
  return proto.mdining.FoodDiningHallMatch.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mdining.FoodDiningHallMatch} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mdining.FoodDiningHallMatch}
 */
proto.mdining.FoodDiningHallMatch.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = msg.getMealtimeMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.mdining.MealTime.deserializeBinaryFromReader, "", new proto.mdining.MealTime());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mdining.FoodDiningHallMatch.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mdining.FoodDiningHallMatch.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mdining.FoodDiningHallMatch} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mdining.FoodDiningHallMatch.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMealtimeMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.mdining.MealTime.serializeBinaryToWriter);
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.mdining.FoodDiningHallMatch.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mdining.FoodDiningHallMatch} returns this
 */
proto.mdining.FoodDiningHallMatch.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, MealTime> mealTime = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.mdining.MealTime>}
 */
proto.mdining.FoodDiningHallMatch.prototype.getMealtimeMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.mdining.MealTime>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.mdining.MealTime));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.mdining.FoodDiningHallMatch} returns this
 */
proto.mdining.FoodDiningHallMatch.prototype.clearMealtimeMap = function() {
  this.getMealtimeMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mdining.MealTime.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mdining.MealTime.prototype.toObject = function(opt_includeInstance) {
  return proto.mdining.MealTime.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mdining.MealTime} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mdining.MealTime.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: jspb.Message.getFieldWithDefault(msg, 1, ""),
    formatteddate: jspb.Message.getFieldWithDefault(msg, 2, ""),
    mealnamesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mdining.MealTime}
 */
proto.mdining.MealTime.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mdining.MealTime;
  return proto.mdining.MealTime.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mdining.MealTime} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mdining.MealTime}
 */
proto.mdining.MealTime.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormatteddate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addMealnames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mdining.MealTime.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mdining.MealTime.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mdining.MealTime} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mdining.MealTime.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFormatteddate();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMealnamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string date = 1;
 * @return {string}
 */
proto.mdining.MealTime.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mdining.MealTime} returns this
 */
proto.mdining.MealTime.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string formattedDate = 2;
 * @return {string}
 */
proto.mdining.MealTime.prototype.getFormatteddate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mdining.MealTime} returns this
 */
proto.mdining.MealTime.prototype.setFormatteddate = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string mealNames = 3;
 * @return {!Array<string>}
 */
proto.mdining.MealTime.prototype.getMealnamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.mdining.MealTime} returns this
 */
proto.mdining.MealTime.prototype.setMealnamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.mdining.MealTime} returns this
 */
proto.mdining.MealTime.prototype.addMealnames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mdining.MealTime} returns this
 */
proto.mdining.MealTime.prototype.clearMealnamesList = function() {
  return this.setMealnamesList([]);
};


goog.object.extend(exports, proto.mdining);