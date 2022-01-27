package com.spg;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

public class Main {
	 public static void main(String[] args) {
		 String text = "sara";
		 try {
			MessageDigest digest = MessageDigest.getInstance("SHA-256");
			digest.reset();
			digest.update(text.getBytes(StandardCharsets.UTF_8));
			String returnMine = String.format("%064x", new BigInteger(1,digest.digest()));
			System.out.println(returnMine);
			
		} catch (NoSuchAlgorithmException e) {
		}
	}
}
