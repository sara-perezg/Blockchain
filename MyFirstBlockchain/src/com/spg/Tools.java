package com.spg;

import java.math.BigInteger;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Tools {

	public String getSha256(Object o) {
		
		String sha256 = null;
		
		try {
			MessageDigest digest = MessageDigest.getInstance("SHA-256");
			digest.reset();
			digest.update(((String) o).getBytes(StandardCharsets.UTF_8));
			sha256 = String.format("%064x", new BigInteger(1,digest.digest()));
			System.out.println(sha256);
			
		} catch (NoSuchAlgorithmException e) {
		}
		
		return sha256;
	}
}
