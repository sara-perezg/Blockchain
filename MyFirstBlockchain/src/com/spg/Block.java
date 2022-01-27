package com.spg;

public class Block {
	private String previousHash;
	private String myHash;
	private String timeStamp;
	
	public Block(String previousHash) {
		super();
		this.previousHash = previousHash;
		this.myHash = myHash;
		this.timeStamp = timeStamp;
	}
	
	public String getPreviousHash() {
		return previousHash;
	}
	public String getMyHash() {
		return myHash;
	}
	public String getTimeStamp() {
		return timeStamp;
	}
	
}
